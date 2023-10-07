import { cn } from '@/lib/utils'
import { Josefin_Sans, EB_Garamond } from 'next/font/google'
import Link from 'next/link'

const josefin = Josefin_Sans({ subsets: ["latin"], weight: "500" })
const eb_garamond = EB_Garamond({ subsets: ["latin"], style: "italic" })

interface CarouselOverlayProps {
    title: string
    heading: string
    subtitle: string
    url: string
    blogUrl: string
}

export const CarouselOverlay = ({
    title,
    heading,
    subtitle,
    url,
    blogUrl
}: CarouselOverlayProps) => {
    return (
        <div className='max-w-xl'>
            <p className={cn(
                "capitalize font-bold text-lg mb-4",
                eb_garamond.className
            )}>{heading}</p>
            <h1 className={cn(
                "text-5xl tracking-widest leading-normal uppercase",
                josefin.className
            )}>{title}</h1>
            <p className='mt-4 mb-12'>{subtitle}</p>
            <div className='flex items-center gap-x-8'>
                <Link href={url} className={cn(
                    'px-10 py-2 bg-background border border-background text-xl text-foreground italic transition-all hover:bg-transparent hover:text-background',
                    eb_garamond.className
                )}>
                    Shop Now
                </Link>
                <Link href={blogUrl} className={cn(
                    'px-10 py-2 bg-transparent border border-background text-xl  italic transition-all hover:bg-background hover:text-foreground',
                    eb_garamond.className
                )}>
                    Read More
                </Link>
            </div>
        </div>
    )
}