// "use client"

// import { useEffect } from "react"

import Navbar from "@/components/navbar"

const HomeLayout = ({
    children
}: {
    children: React.ReactNode
}) => {

    // useEffect(() => {
    //     (async () => {
    //         const LocomotiveScroll = (await (import("locomotive-scroll"))).default
    //         const locomotiveScroll = new LocomotiveScroll()
    //     })()
    // }, [])

    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default HomeLayout