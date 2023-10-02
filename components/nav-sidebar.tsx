"use client"

import Link from "next/link"
import Image from "next/legacy/image"
import { usePathname } from "next/navigation"
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
    SheetFooter
} from "@/components/ui/sheet"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { navLinks } from "@/lib/nav-links"
import { useSession } from "next-auth/react"

export const NavSidebar = () => {
    const { data: session } = useSession()
    const pathname = usePathname()

    const onClick = () => {

    }

    return (
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
                                priority
                            />
                        </Link>
                    </SheetTitle>
                </SheetHeader>
                <Accordion type="single" collapsible className="overflow-y-auto">
                    {navLinks.map(({ url, label, categories }) => {
                        const isActive =
                            (pathname === "/" && url === "/") ||
                            pathname === url ||
                            pathname?.startsWith(`${url}/`)
                        if (!categories) {
                            return (
                                <Link
                                    key={url}
                                    href={url}
                                    className="flex items-center pl-0 py-0"
                                >
                                    <hr className={cn(
                                        "opacity-0 border-2 border-primary h-10 transition-all",
                                        isActive && "opacity-100"
                                    )} />
                                    <div className="ml-6 py-2 mr-auto no-underline uppercase">
                                        {label}
                                    </div>
                                </Link>
                            )
                        }

                        return (
                            <AccordionItem key={url} value={url} className="border-none">
                                <AccordionTrigger
                                    type="button"
                                    onClick={onClick}
                                    className="flex items-center pr-6 py-0 hover:no-underline focus:no-underline"
                                >
                                    <hr className={cn(
                                        "opacity-0 border-2 border-primary h-full transition-all",
                                        isActive && "opacity-100"
                                    )} />
                                    <div className="ml-6 py-2 mr-auto no-underline uppercase">
                                        {label}
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="pl-16">
                                    <ul className="py-2 flex flex-col gap-4">
                                        {categories?.map(({ url, label, subCategories }) => (
                                            <li key={url}>
                                                <Link href={url} className="hover:text-foreground transition-all">
                                                    {label}
                                                </Link>
                                                {subCategories &&
                                                    <ul className="pl-6 py-3 text-muted-foreground flex flex-col gap-y-2">
                                                        {subCategories?.map(({ url, label }) => (
                                                            <li key={url}>
                                                                <Link href={url} className="hover:text-foreground transition-all">
                                                                    {label}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                }
                                            </li>
                                        ))}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        )
                    })}
                </Accordion>
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

    )
}