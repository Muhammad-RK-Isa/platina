"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { useSession } from "next-auth/react"
import Image from "next/legacy/image"
import Link from "next/link"
import Logo from "@/public/platina-logo.avif"

import { NavLinks } from "@/components/navbar/nav-links"
import { NavSidebar } from "@/components/navbar/nav-sidebar"
import { UserButton } from "@/components/user-button"
import { cn } from "@/lib/utils"
import { User2Icon } from "lucide-react"
import { SearchModal } from "./search-modal"

const Navbar = () => {
    const { data: session } = useSession()
    const pathname = usePathname()
    const isHomePage = pathname === "/"

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
            "p-6 lg:p-8 flex items-center justify-between w-full text-muted-foreground text-opacity-50 top-0 ease-in-out transition-all duration-500 z-50",
            isScrollingDown ? "-translate-y-full" : "translate-y-0",
            (scrollY > 90 && isHomePage) && "bg-white text-foreground",
            isHomePage ? "fixed" : "sticky border-b bg-white text-foreground"
        )}>
            <NavSidebar />
            <NavLinks />
            <Link href="/" className="absolute  right-1/2 translate-x-1/2">
                <Image
                    src={Logo}
                    alt="logo"
                    objectFit="contain"
                    height={50}
                    width={150}
                    priority
                />
            </Link>
            <div className="flex items-center gap-4">
                <SearchModal />
                {session ?
                    <UserButton />
                    :
                    <Link href="/sign-in">
                        <User2Icon className="hover:text-secondary transition-all"/>
                    </Link>
                }
            </div>
        </nav>
    )
}

export default Navbar
