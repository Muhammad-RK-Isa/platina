import Link from "next/link"

import { usePathname, useRouter } from "next/navigation"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

interface SubCategory {
    url: string;
    label: string;
}

interface Category {
    url: string;
    label: string;
    subCategories?: SubCategory[];
}

interface NavLink {
    url: string;
    label: string;
    categories?: Category[];
}

const navLinks: NavLink[] = [
    {
        url: '/',
        label: "Home",
    },
    {
        url: '/products',
        label: "Products",
        categories: [
            {
                url: "/products/men",
                label: "Men",
                subCategories: [
                    {
                        url: "/",
                        label: "Socks"
                    },
                    {
                        url: "/",
                        label: "Caps"
                    },
                    {
                        url: "/",
                        label: "T-shirt"
                    },
                ]
            },
        ]
    },
    {
        url: '/pages',
        label: "Pages",
        categories: [
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
    },
];

// Now you can use `navLinks` with the defined type annotations.


export const MobileSidebar = () => {

    const router = useRouter()
    const pathname = usePathname()

    const onClick = () => {

    }

    return (
        <>
            {navLinks.map(({ url, label, categories }) => {
                const isActive =
                    (pathname === "/" && url === "/") ||
                    pathname === url ||
                    pathname?.startsWith(`${url}/`)
                if (!categories) {
                    return (
                        <button
                            key={url}
                            type="button"
                            onClick={onClick}
                            className="flex items-center pl-0 py-0"
                        >
                            <hr className={cn(
                                "opacity-0 border-2 border-primary h-full transition-all",
                                isActive && "opacity-100"
                            )} />
                            <div className="ml-6 py-2 mr-auto no-underline uppercase">
                                {label}
                            </div>
                        </button>
                    )
                }

                return (
                    <Accordion key={url} type="single" collapsible className="w-full">
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
                                <ul className="py-2 flex flex-col gap-4 text-muted-foreground">
                                    {categories?.map(({ url, label, subCategories }) => (
                                        <li key={url}>
                                            <Link href={url} className="hover:text-foreground transition-all">
                                                {label}
                                            </Link>
                                            {subCategories &&
                                                <ul className="pl-6 py-4 flex flex-col gap-4">
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
                    </Accordion>
                )
            })}
        </>
    )
}