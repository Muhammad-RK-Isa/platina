import Navbar from "@/components/ui/navbar"

const HomeLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div>
            <Navbar />
            <div className="p-4 md:p-6">
                {children}
            </div>
        </div>
    )
}

export default HomeLayout