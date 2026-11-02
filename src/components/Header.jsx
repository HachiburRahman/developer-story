import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div className='flex justify-between items-center px-3 py-2'>
            <Link href={'/'} className='text-2xl font-bold'>Dev-Story🐳</Link>
            <nav className='space-x-4'>
                <Link href={'/login'}>Login</Link>
                <Link href={'/register'}>Register</Link>
                <Link href={'/stories'}>Stories</Link>
                <Link href={'/tutorials'}>Tutorials</Link>
                <Link href={'/about'}>About</Link>
            </nav>
        </div>
    );
};

export default Header;