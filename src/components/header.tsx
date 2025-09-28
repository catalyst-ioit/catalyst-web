import React, { useState } from 'react';
import { GlobeIcon } from './ui/icons.tsx';
import { CursorHover } from './cursorProvider.tsx'
import { Link } from '@tanstack/react-router';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = ['ABOUT', 'SERVICES', 'CONTACT', 'TEAM', 'PARTNERS', 'PROJECTS', 'JOIN US', 'GALLERY'];

    const NavItem: React.FC<{ href: string; className: string; children: React.ReactNode }> = ({ href, className, children }) => (
        <Link to={href} className={className}>
            <CursorHover variant="link" className="m-auto w-full h-full flex items-center justify-center">
                <p className="m-auto">{children}</p>
            </CursorHover>
        </Link>
    );

    const NavGrid: React.FC = () => (
        <div className="hidden lg:grid grid-rows-2 font-sans text-white/90 w-full text-xs tracking-widest">
            <div className="grid grid-cols-10 row-span-1 items-center border-b border-white/20 w-full">
                <NavItem href="/about" className="col-span-2 text-center h-full flex border-r border-white/20 hover:bg-white/5 transition-colors">ABOUT</NavItem>
                <NavItem href="/services" className="col-span-3 text-center h-full flex border-r border-white/20 hover:bg-white/5 transition-colors">SERVICES</NavItem>
                <NavItem href="/contact" className="col-span-2 text-center h-full flex border-r border-white/20 hover:bg-white/5 transition-colors">CONTACT</NavItem>
                <NavItem href="/team" className="col-span-2 text-center h-full flex border-r border-white/20 hover:bg-white/5 transition-colors">TEAM</NavItem>
                <div className="col-span-1 text-center h-full flex items-center justify-center">
                    <CursorHover variant="link"><GlobeIcon /></CursorHover>
                </div>
            </div>
            <div className="grid grid-cols-10 row-span-1 items-center w-full">
                <NavItem href="/partners" className="col-span-4 text-center h-full flex border-r border-white/20 hover:bg-white/5 transition-colors">PARTNERS</NavItem>
                <NavItem href="/projects" className="col-span-2 text-center h-full flex border-r border-white/20 hover:bg-white/5 transition-colors">PROJECTS</NavItem>
                <NavItem href="/joinus" className="col-span-2 text-center h-full flex border-r border-white/20 hover:bg-white/5 transition-colors">JOIN US</NavItem>
                <NavItem href="/gallery" className="col-span-2 text-center h-full flex hover:bg-white/5 transition-colors">GALLERY</NavItem>
            </div>
        </div>
    );

    return (
        <header className="absolute top-0 left-0 right-0 z-20 p-4 sm:p-6 md:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-row border border-white/20 backdrop-blur-md">
                    <div className="border-r border-white/20 px-6 lg:px-12 py-4 flex items-center gap-8">
                        <CursorHover variant="link">
                            <Link to="/" aria-label="Go to homepage">
                                <img src="/catalysts_text.svg" alt="Catalysts Logo" className="h-12" />
                            </Link>
                        </CursorHover>
                        <CursorHover variant="text" className="w-40">
                            <p className="font-sans text-sm lg:block hidden text-white">Changing the world one step at a time.</p>
                        </CursorHover>
                    </div>

                    <NavGrid />
                    <CursorHover variant="link" className="lg:hidden w-full">
                        <button type='submit' onClick={() => setIsMenuOpen(true)} className="flex items-center justify-center font-sans text-white w-full h-full">
                            <p className="my-auto mx-auto tracking-widest text-sm">MENU</p>
                        </button>
                    </CursorHover>
                </div>
            </div>

            <div className={`lg:hidden fixed top-0 left-0 w-full h-full bg-[#111111]/90 backdrop-blur-sm transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex justify-end p-6">
                    <button type='submit' onClick={() => setIsMenuOpen(false)} className="text-white z-50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>
                <nav className="flex flex-col items-center justify-center h-full -mt-16 px-8">
                    {navLinks.map((link) => (
                        <Link key={link} to={link.split(" ").join("").toLowerCase()} onClick={() => setIsMenuOpen(false)} className="text-3xl text-white py-4 w-full text-center hover:bg-white/10 rounded-md transition-colors">{link}</Link>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;