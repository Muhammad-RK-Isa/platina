"use client"

import { useEffect } from "react"

import Navbar from "@/components/ui/navbar"

const HomeLayout = ({
    children
}: {
    children: React.ReactNode
}) => {

    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await (import("locomotive-scroll"))).default
            const locomotiveScroll = new LocomotiveScroll()
        })()
    }, [])

    return (
        <div data-scroll>
            <Navbar />
            {children}
        </div>
    )
}

export default HomeLayout