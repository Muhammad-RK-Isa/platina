import Link from "next/link"

import { PagesLinks } from "@/components/ui/navbar"

export const MobileSidebar = ({
    pages
}: {
    pages: PagesLinks[]
}) => {
    return (
        <div className="flex flex-col items-center">
            {pages.map(({ url, label }) => (
                <Link key={url} href={url}>
                    {label}
                </Link>
            ))}
        </div>
    )
}