import { useAuth } from "@/hooks/use-auth";

const UserProfilePage = async () => {
    const { user } = await useAuth()

    return (
        <div>
            Name: {user?.name}
            <br />
            Email: {user?.email}
        </div>
    )
}

export default UserProfilePage