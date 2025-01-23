import Link from 'next/link';
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    return (
        <div className='container mx-auto py-4 border-b shadow-sm'>
            <ul className='flex  items-center justify-center gap-5'>
                <li><Link className='hover:text-green-500' href='/'>Home</Link></li>
                <li><Link className='hover:text-green-500' href='/profile'>Profile</Link></li>
                {user ?
                    <LogoutLink className='hover:text-green-500'>Log out</LogoutLink>
                    : <>
                        <LoginLink className='hover:text-green-500'>Sign in</LoginLink>
                        <RegisterLink className='hover:text-green-500'>Sign up</RegisterLink>
                    </>
                }

            </ul>
        </div>
    );
};

export default Navbar;