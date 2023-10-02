"use client"

import Link from "next/link"
import Image from "next/legacy/image"
import { signOut, useSession } from "next-auth/react"
import { LogOutIcon, User2Icon, UserCircle2Icon } from "lucide-react"

import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

export const UserButton = ({
    className,
    ...props
}: React.HtmlHTMLAttributes<HTMLElement>) => {
    const { data: session } = useSession()

    if (!session) null

    return (
        <Popover>
            <PopoverTrigger className={cn(className)} asChild>
                <User2Icon className="h-6 w-6 hover:text-muted-foreground transition-all" />
            </PopoverTrigger>
            <PopoverContent className="p-4 w-max" align="end">
                <div className="flex flex-col">
                    <div className="border-b p-2">
                        <h4 className="font-semibold">{session?.user.name}</h4>
                        <p className="text-sm text-muted-foreground">{session?.user.email}</p>
                    </div>
                    <div className="mt-1 flex items-center">
                        <Link
                            href="/user/profile"
                            className="border-r pl-2 py-2 flex flex-1 gap-2 items-center justify-start focus:outline-none hover:bg-accent transition-all"
                        >
                            {session?.user.image ?
                                <Image
                                    src={session?.user?.image}
                                    alt="user image"
                                    height={24}
                                    width={24}
                                    className="rounded-full"
                                />
                                :
                                <UserCircle2Icon className="h-5 w-5" />
                            }
                            <span className="text-left">Profile</span>
                        </Link>
                        <button
                            onClick={() => signOut()}
                            className="px-3 py-2 flex gap-2 items-center justify-start text-sm focus:outline-none hover:text-destructive hover:bg-destructive/5 transition-all"
                        >
                            <LogOutIcon className="h-5 w-4" />
                        </button>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}