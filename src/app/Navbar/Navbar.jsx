import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='container mx-auto py-4 border-b shadow-sm'>
            <ul className='flex  items-center justify-center gap-5'>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/profile'>Profile</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;