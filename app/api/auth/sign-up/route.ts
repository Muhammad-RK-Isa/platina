import { NextResponse } from "next/server"
import bcrypt from "bcrypt"

import prismadb from "@/lib/prismadb"
import { SignUpFormFields } from "@/types/auth-types"

export async function POST(
    req: Request
) {
    try {
        const { name, email, password }: SignUpFormFields = await req.json()

        if (!name) return new NextResponse('REQUIRED_FIELD_NAME', { status: 400 })
        if (!email) return new NextResponse('REQUIRED_FIELD_EMAIL', { status: 400 })

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
        
        const isValidEmail = emailRegex.test(email)

        if (!isValidEmail) return new NextResponse('INVALID_EMAIL', { status: 400 })

        if (!password) return new NextResponse('REQUIRED_PASSWORD', { status: 400 })

        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/

        const isValidPassword = passwordRegex.test(password)

        if (!isValidPassword) return new NextResponse('INVALID_PASSWORD', { status: 400 })

        const existingUser = await prismadb.user.findUnique({
            where: {
                email,
            }
        })
        
        if (existingUser) return new NextResponse('EXISTING_USER', { status: 409 })

        const hash = await bcrypt.hash(password, 10)

        const newUser = await prismadb.user.create({
            data: {
                name,
                email,
                hash,
            }
        })

        return NextResponse.json({ inserted: true, createdAt: newUser.createdAt })

    } catch (error) {
        console.error("[REGISTRATION_POST", error)
        return new NextResponse("Internal error", { status: 500 })
    }
}