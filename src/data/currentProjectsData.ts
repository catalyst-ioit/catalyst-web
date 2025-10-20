export interface Project {
    title: string;
    category: string;
    lead: string;
    team: string[];
    description: string;
    features: string[];
    imageUrl: string;
}

export const currentProjectsData: Project[] = [
     {
        title: "Mosquito & Odor Automation Bot",
        category: "Robotics & AI",
        lead: "Aaron Mobby (SY E&TC)",
        team: ["Ansh Salunkhe (SY E&Tc)", "Dinesh Seervi (SY Comp)", "Vishwank Ramji (SY E&Tc)", "Atharva Karekar (SY E&Tc)", "Parth Nikam (SY E&Tc)", "Somshekhar Hunasimarad (SY E&Tc)"],
        description: "This project tackles the issue of odor and mosquitoes in areas like college basements by developing a versatile, multi-application bot. It replaces traditional, high-maintenance misting systems with an innovative, sustainable, and autonomous solution for creating a comfortable and healthy environment.",
        features: [
            "Autonomous navigation using LIDAR for mapping and SLAM for localization.",
            "Path retracing and obstacle avoidance for reliable operation.",
            "Continuous mist spray system for odor control and pest reduction.",
            "Automated recharging and refilling at a dedicated station.",
            "A hybrid approach balancing cost, performance, and user comfort."
        ],
        imageUrl: "/projects/mosquito-and-odor.png",
    },
    {
        title: "Affordable in-house Function Generator",
        category: "Embedded Systems & Hardware",
        lead: "Arya Nirhali (SY E&TC)",
        team: ["Chandrashekhar Lade (SY ET)", "Sanket Kolhe (SY ET)", "Vedant Nalawade (SY ET)"],
        description: "This project aims to design and develop an indigenous, low-cost, compact, two-channel function generator using locally available components. It addresses the high cost of commercial function generators, making essential lab equipment more accessible for educational institutions in India.",
        features: [
            "Utilizes STM32F407ZG microcontroller as the central control unit.",
            "Integrates a Direct Digital Synthesis (DDS) IC for precise and stable analog signals.",
            "Aims to achieve a frequency range of 0.1 Hz – 10 MHz.",
            "Provides standard waveforms: Sine, Square, Triangle, DC, Arbitrary, and Pulse.",
            "Features a 4.3 inch TFT LCD display for a user-friendly interface."
        ],
        imageUrl: "/projects/inhouse-function-generator.png",
    },
    {
        title: "Documentation & Knowledge Management System (DKMS)",
        category: "Web Development & Cloud",
        lead: "Sarvesh Kolte (SY IT)",
        team: ["To be decided"],
        description: "Addressing critical barriers to faculty productivity and knowledge preservation, this project aims to build a centralized repository for institutional documents. It will replace inefficient, scattered storage methods with a unified, searchable, and secure system on the college's local network.",
        features: [
            "Highly efficient search through large volumes of documents using keywords and tags.",
            "Intuitive interface for uploading and tagging digital or scanned documents.",
            "Multi-level, role-based access controls for secure and flexible document sharing.",
            "Public notice board feature for sharing announcements and documents by tagging users.",
            "Built on a local NAS (Network Attached Storage) for fast and reliable access."
        ],
        imageUrl: "/projects/dkms.jpg",
    },
   
];
