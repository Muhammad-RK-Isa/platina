import Navbar from "@/components/navbar/navbar"

const HomeLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default HomeLayout