
export interface Project {
  id: string;
  title: string;
  category: string;
  src: string;
  link: string;
}

export const projectData: Project[] = [

  {
    id: "functiongenerator",
    title: 'FUNCTION GENERATOR',
    category: 'Embedded Systems & Hardware',
    src: '/projects/functiongenerator.JPG',
     link: "/projects/functiongenerator"
  }, 
   {
    id: "marut",
    title: 'MARUT',
    category: 'HARDWARE',
    src: '/projects/marut.JPG',
    link: "/projects/marut"
  },
 {
    id: "slm",
    title: 'SLM',
    category: 'Deep Learning',
    src: '/projects/slm.JPG',
     link: "/projects/slm"
  },
    {
    id: "dkms",
    title: 'DKMS',
    category: 'Web Development & Cloud',
    src: '/projects/tempdkms.JPG',
     link: "/projects/dkms"
  },
];