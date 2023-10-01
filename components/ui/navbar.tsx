"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/legacy/image"
import { useSession } from "next-auth/react"
import {
    MenuIcon,
    ShoppingCartIcon,
    User2
} from "lucide-react"

import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetFooter
} from "@/components/ui/sheet"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport
} from "@/components/ui/navigation-menu"
import { Badge } from "@/components/ui/badge"
import { MobileSidebar } from "@/components/ui/mobile-sidebar"
import { cn } from "@/lib/utils"
import { navLinks } from "@/lib/nav-links"

const Navbar = () => {
    const { data: session } = useSession()
    const [scrollY, setScrollY] = React.useState<number>(0)
    const [isScrollingDown, setIsScrollingDown] = React.useState<boolean>(false)

    React.useEffect(() => {
        const handleScroll = () => {
            const newScrollY = window.scrollY;
            setIsScrollingDown(newScrollY > scrollY);
            setScrollY(newScrollY)
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [scrollY])

    return (
        <nav className={cn(
            "fixed top-0 p-6 lg:p-8 flex items-center justify-between w-full transition-all ease-in-out duration-500 z-50",
            isScrollingDown ? "-translate-y-full" : "translate-y-0",
            scrollY > 90 && "bg-white"
        )}>
            <Sheet>
                <SheetTrigger asChild>
                    <button className="md:hidden hover:text-muted-foreground transition-all">
                        <MenuIcon className="h-6 w-6" />
                    </button>
                </SheetTrigger>
                <SheetContent side="left" className="p-0 max-w-[20rem] flex flex-col">
                    <SheetHeader className="p-4">
                        <SheetTitle className="mr-auto">
                            <Link href="/">
                                <Image
                                    src="/pw-logo.png"
                                    alt="logo"
                                    objectFit="contain"
                                    height={40}
                                    width={150}
                                />
                            </Link>
                        </SheetTitle>
                    </SheetHeader>
                    <MobileSidebar />
                    <SheetFooter className="mt-auto p-6 flex flex-col sm:flex-col sm:space-x-0">
                        {session ?

                            <Link href="/profile" className="border-t py-4 flex items-center uppercase hover:text-muted-foreground transition-all">
                                <User2 className="h-6 w-6 mr-2" />
                                PROFILE
                            </Link>
                            :
                            <Link href="/sign-in" className="border-t py-4 flex items-center uppercase hover:text-muted-foreground transition-all">
                                <User2 className="h-6 w-6 mr-2" />
                                SIGN IN
                            </Link>
                        }
                        <Link href="/cart" className="border-t py-4 flex items-center uppercase hover:text-muted-foreground transition-all">
                            <ShoppingCartIcon className="h-6 w-6 mr-2" />
                            SHOPPING CART
                            <Badge className="ml-auto">0</Badge>
                        </Link>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
            <div className="hidden md:flex items-center gap-x-4">
                {navLinks.map(({ url, label, categories }) => {
                    if (!categories) {
                        return (
                            <Link
                                key={url}
                                href={url}
                                className="text-sm hover:text-muted-foreground transition-all"
                            >
                                {label}
                            </Link>
                        )
                    }
                })}
                <NavigationMenu>
                    <NavigationMenuList>
                        {navLinks.map(({ url, label, categories }) => {
                            if (categories) {
                                return (
                                    <NavigationMenuItem key={url}>
                                        <NavigationMenuTrigger className="bg-transparent hover:bg-none text-sm hover:text-muted-foreground transition-all">
                                            <Link href={url}>
                                                {label}
                                            </Link>
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className={cn(
                                                "p-6 grid gap-x-10 gap-y-4 w-max",
                                                `grid-cols-${(categories.length).toString()}`
                                            )}>
                                                {categories.map(({ url, label, subCategories }) => (
                                                    <li
                                                        key={url}
                                                        className={cn(
                                                            subCategories && "flex flex-col gap-4"
                                                        )}
                                                    >
                                                        <Link
                                                            href={url}
                                                            className="hover:text-muted-foreground transition-all text-sm"
                                                        >
                                                            {label}
                                                        </Link>
                                                        {subCategories?.map(({ url, label }) => (
                                                            <Link
                                                                key={url}
                                                                href={url}
                                                                className="text-muted-foreground hover:text-foreground transition-all text-sm"
                                                            >
                                                                {label}
                                                            </Link>
                                                        ))}
                                                    </li>
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                )
                            }
                        })}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <Link href="/" className="absolute  right-1/2 translate-x-1/2">
                <Image
                    src="/pw-logo.png"
                    alt="logo"
                    objectFit="contain"
                    height={35}
                    width={150}
                />
            </Link>
            <Sheet>
                <SheetTrigger asChild>
                    <button className="inline-flex items-center gap-1 hover:text-muted-foreground transition-all">
                        <ShoppingCartIcon className="h-6 w-6" />
                        <Badge>0</Badge>
                    </button>
                </SheetTrigger>
                <SheetContent side="right" className="max-w-[20rem]">
                    <SheetHeader>
                        <SheetTitle>
                            Your cart is empty
                        </SheetTitle>
                        <SheetDescription>
                            Add some products to see details
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </nav>
    )
}

export default Navbar
