"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"

import { NavSidebar } from "@/components/ui/nav-sidebar"
import { ShoppingCartSidebar } from "@/components/ui/shopping-cart-sidebar"
import { NavLinks } from "@/components/ui/nav-links"
import { cn } from "@/lib/utils"

const Navbar = () => {
    const [scrollY, setScrollY] = React.useState<number>(0)
    const [isScrollingDown, setIsScrollingDown] = React.useState<boolean>(false)

    React.useEffect(() => {
        const handleScroll = () => {
            const newScrollY = window.scrollY
            setIsScrollingDown(newScrollY > scrollY)
            setScrollY(newScrollY)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [scrollY])

    return (
        <nav className={cn(
            "fixed top-0 p-6 lg:p-8 flex items-center justify-between w-full transition-all ease-in-out duration-500 z-50",
            isScrollingDown ? "-translate-y-full" : "translate-y-0",
            scrollY > 90 && "bg-white"
        )}>
            <NavSidebar />
            <NavLinks />
            <Link href="/" className="absolute  right-1/2 translate-x-1/2">
                <Image
                    src="/pw-logo.png"
                    alt="logo"
                    objectFit="contain"
                    height={35}
                    width={150}
                />
            </Link>
            <ShoppingCartSidebar />
        </nav>
    )
}

export default Navbar
