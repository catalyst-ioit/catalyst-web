
import React from 'react';

export const GlobeIcon = () => (
    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
);

export const StarBurstIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 0L24.3856 19.6144L44 22L24.3856 24.3856L22 44L19.6144 24.3856L0 22L19.6144 19.6144L22 0Z" fill="url(#paint0_linear_1_2)" />
        <defs>
            <linearGradient id="paint0_linear_1_2" x1="22" y1="0" x2="22" y2="44" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
        </defs>
    </svg>
);

export const TripleStarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 88 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 0L24.3856 19.6144L44 22L24.3856 24.3856L22 44L19.6144 24.3856L0 22L19.6144 19.6144L22 0Z" fill="url(#paint0_linear_2_1)" />
        <path d="M66 0L68.3856 19.6144L88 22L68.3856 24.3856L66 44L63.6144 24.3856L44 22L63.6144 19.6144L66 0Z" fill="url(#paint1_linear_2_1)" />
        <defs>
            <linearGradient id="paint0_linear_2_1" x1="22" y1="0" x2="22" y2="44" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" /><stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint1_linear_2_1" x1="66" y1="0" x2="66" y2="44" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" /><stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
        </defs>
    </svg>
);

export const AbstractSphere: React.FC<{ className?: string; children?: React.ReactNode }> = ({ className, children }) => (
    <div className={`relative ${className}`}>
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
                <radialGradient id="sphereGradient">
                    <stop offset="0%" stopColor="rgba(192, 132, 252, 0.3)" />
                    <stop offset="100%" stopColor="rgba(236, 72, 153, 0)" />
                </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="50" fill="url(#sphereGradient)" />
            <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
        </svg>
        {children}
    </div>
);

export const WavyLine: React.FC<{ id: string }> = () => (
    <p className="font-heading font-light text-4xl tracking-[-3px] bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent select-none -mt-2" aria-hidden="true">
        ~~~~~~~~~~~~
    </p>
);

export const TwitterIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    </svg>
);

export const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
    </svg>
);

export const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.148-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.359 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" clipRule="evenodd" />
    </svg>
);
