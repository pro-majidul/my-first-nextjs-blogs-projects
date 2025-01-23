// import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
const Profile = async () => {
    const { isAuthenticated, getUser } = getKindeServerSession();
    const isAuthed = await isAuthenticated();
    const user = await getUser();
    if (!isAuthed) {
        redirect("/api/auth/login");
    }
    return (isAuthed &&
        <div className="flex flex-col items-center justify-center py-10">
            <h3 className="md:text-4xl text-xl font-bold ">Welcome to Your Profile!!</h3>
            <p className="md:text-3xl text-xl my-4 bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text font-bold text-transparent leading-normal " >{user?.email}</p>
        </div>
        //   :
        //     <div>
        //         This page is protected, please <LoginLink>Login</LoginLink> to view it
        //     </div> 
    );
};

export default Profile;