import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { LinkedInIcon } from './ui/icons.tsx';
import type { TeamMember } from '../data/team.ts';

interface MemberCardProps {
    member: TeamMember;
}

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
    return (
        <motion.div
            className="border border-white/20 bg-[#1a1a1a] group overflow-hidden text-center flex flex-col items-center p-8 w-full max-w-sm mx-auto"
            variants={cardVariants}
        >
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-white/20">
                <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <h3 className="mt-6 text-2xl font-medium text-white font-heading">{member.name}</h3>
            <p className="mt-1 text-purple-400 text-sm tracking-wider">{member.role}</p>
            <a
                href={member.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 text-white/60 hover:text-white transition-colors"
                aria-label={`LinkedIn profile of ${member.name}`}
            >
                <LinkedInIcon className="h-6 w-6" />
            </a>
        </motion.div>
    );
};

export default MemberCard;