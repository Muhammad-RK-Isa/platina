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
                <button className="inline-flex items-center gap-1 group">
                    <ShoppingCartIcon className="h-5 w-5 group-hover:text-muted-foreground transition-all" />
                    <div className="p-1 h-5 w-max min-w-[1.25rem] grid place-content-center text-xs bg-primary text-accent rounded-full group-hover:bg-primary/50 transition-all">0</div>
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