import { useState } from 'react';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = async () => {
    const user = await currentUser();

    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto">
                <ul className="flex flex-wrap justify-between items-center">
                    <div className=''>
                        <Link href="/">Logo</Link>
                    </div>
                    <div className='flex justify-between items-center'>
                        <li className="mx-2">
                            <Link className="text-white hover:text-gray-300" href="/">
                                HOME
                            </Link>
                        </li>
                        <li className="mx-2">
                            <Link className="text-white hover:text-gray-300" href="/schedule">
                                EVENTS
                            </Link>
                        </li>
                        <li className="mx-2">
                            <Link className="text-white hover:text-gray-300" href="/speakers">
                                CONTACT US
                            </Link>
                        </li>
                        <li className="mx-2">
                            <Link className="text-white hover:text-gray-300" href="/venue">
                                Venue
                            </Link>
                        </li>
                        {!user ? (
                            ""
                        ): (
                            <li className="mx-2">
                                <Link className="text-white hover:text-gray-300" href="/dashboard">
                                    Dashboard
                                </Link>
                            </li>
                        
                        )}
                    </div>
                    <div className='flex gap-3'>
                        <header>
                            {!user ? (
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    <SignInButton />
                                </button>

                            ) : (
                                <UserButton />
                            )}
                        </header>
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
