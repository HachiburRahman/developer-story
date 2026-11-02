import Title from '@/components/Title';
import Link from 'next/link';
import React from 'react';

const AboutPage = () => {
    return (
        <div>
            <Title><h1>This is About Page</h1></Title>
            <nav className='space-x-4'>
                <Link href={'/about/contact'}>Contact</Link>
                <Link href={'/about/teams'}>Teams</Link>
            </nav>
        </div>
    );
};

export default AboutPage;