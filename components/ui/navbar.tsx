import Link from "next/link"
import Image from "next/image"
import { MenuIcon, ShoppingCartIcon } from "lucide-react"

import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetFooter
} from "@/components/ui/sheet"

const Navbar = () => {
    return (
        <div className="border-b p-4 md:p-6 flex items-center justify-between transition-all">
            <Sheet>
                <SheetTrigger asChild>
                    <button className="md:hidden hover:text-muted-foreground transition-all">
                        <MenuIcon className="h-6 w-6" />
                    </button>
                </SheetTrigger>
                <SheetContent side="left" className="max-w-[18rem]">
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
                </SheetContent>
            </Sheet>
            <div className="hidden md:flex items-center gap-x-4">
                Home
            </div>
            <Link href="/">
                <Image
                    src="/pw-logo.png"
                    alt="logo"
                    height={30}
                    width={100}
                />
            </Link>
            <Sheet>
                <SheetTrigger asChild>
                    <button className="hover:text-muted-foreground transition-all">
                        <ShoppingCartIcon className="h-6 w-6" />
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