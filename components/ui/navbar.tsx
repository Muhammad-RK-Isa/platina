"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { MenuIcon, ShoppingCartIcon, User2 } from "lucide-react"

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
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Badge } from "@/components/ui/badge"
import { MobileSidebar } from "./mobile-sidebar"
import { useSession } from "next-auth/react"

export interface PagesLinks {
    url: string
    label: string
}

const pages: PagesLinks[] = [
    {
        url: "/about",
        label: "About Us"
    },
    {
        url: "/contact",
        label: "Contact Us"
    },
    {
        url: "/contact",
        label: "LinkedIn"
    },
    {
        url: "https://www.facebook.com/pixiewearofficial",
        label: "Facebook"
    },
    {
        url: "/",
        label: "Instagram"
    },
    {
        url: "https://www.youtube.com/@PixieWear",
        label: "YouTube"
    },
]

const Navbar = () => {
    const { data: session } = useSession()

    return (
        <div className="relative border-b p-4 md:p-6 flex items-center justify-between w-full transition-all">
            <Sheet>
                <SheetTrigger asChild>
                    <button className="md:hidden hover:text-muted-foreground transition-all">
                        <MenuIcon className="h-6 w-6" />
                    </button>
                </SheetTrigger>
                <SheetContent side="left" className="max-w-[20rem] flex flex-col">
                    <SheetHeader>
                        <SheetTitle>
                            <Link href="/">
                                <Image
                                    src="/pw-logo.png"
                                    alt="logo"
                                    height={30}
                                    width={100}
                                />
                            </Link>
                        </SheetTitle>
                    </SheetHeader>
                    <MobileSidebar pages={pages} />
                    <SheetFooter className="mt-auto flex flex-col sm:flex-col sm:space-x-0">
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
                <Link href="/" className="text-sm">
                    Home
                </Link>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                Products
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="p-6 grid gap-3 w-max grid-cols-2">
                                    {pages.map(({ url, label }) => (
                                        <li key={url} className="hover:text-muted-foreground transition-all text-sm">
                                            <Link href={url} target="_blank">{label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                Pages
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="p-6 grid gap-3 w-max grid-cols-2">
                                    {pages.map(({ url, label }) => (
                                        <li key={url} className="hover:text-muted-foreground transition-all text-sm">
                                            <Link href={url} target="_blank">{label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <Link href="/" className="absolute right-1/2 translate-x-1/2">
                <Image
                    src="/pw-logo.png"
                    alt="logo"
                    height={30}
                    width={100}
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
        </div>
    )
}

export default Navbar
