import Link from "next/link"
import { usePathname } from "next/navigation"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { navLinks } from "@/lib/nav-links"

export const MobileSidebar = () => {
    const pathname = usePathname()

    const onClick = () => {

    }

    return (
        <Accordion type="single" collapsible className="w-full">
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
                    <AccordionItem value={url} className="border-none">
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
    )
}