"use client"

import { ShoppingCartIcon } from "lucide-react"

import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
} from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"


export const ShoppingCartSidebar = () => {
    return (
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
    )
}