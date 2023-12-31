import Link from "next/link"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuIndicator
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { navLinks } from "@/lib/nav-links"

export const NavLinks = () => {
    return (
        <div className="hidden md:flex items-center gap-x-4">
            {navLinks.map(({ url, label, categories }) => {
                if (!categories) {
                    return (
                        <Link
                            key={url}
                            href={url}
                            className="text-sm hover:text-secondary transition-all"
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
                                <NavigationMenuItem key={url} className="bg-transparent hover:bg-transparent">
                                    <NavigationMenuTrigger className="hover:text-secondary transition-all" iconHidden>
                                        <Link href={url}>
                                            {label}
                                        </Link>
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <NavigationMenuIndicator />
                                        <ul className={cn(
                                            "p-6 w-max grid gap-x-6 gap-y-4",
                                            (categories[0].subCategories && categories.length === 3) && "grid-cols-3",
                                            (categories[0].subCategories && categories.length === 4) && "grid-cols-4",
                                            (categories[0].subCategories && categories.length === 5) && "grid-cols-5"
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
                                                        className="text-sm hover:text-secondary transition-all"
                                                    >
                                                        {label}
                                                    </Link>
                                                    {subCategories?.map(({ url, label }) => (
                                                        <Link
                                                            key={url}
                                                            href={url}
                                                            className="text-sm text-muted-foreground hover:text-foreground transition-all"
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
    )
}