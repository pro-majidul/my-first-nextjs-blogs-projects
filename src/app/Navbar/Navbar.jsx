import Link from 'next/link';
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

const Navbar = () => { 
    return (
        <div className='container mx-auto py-4 border-b shadow-sm'>
            <ul className='flex  items-center justify-center gap-5'>
                <li><Link className='hover:text-green-500' href='/'>Home</Link></li>
                <li><Link className='hover:text-green-500' href='/profile'>Profile</Link></li>

                <LoginLink>Sign in</LoginLink>
                <RegisterLink>Sign up</RegisterLink>
            </ul>
        </div>
    );
};

export default Navbar;