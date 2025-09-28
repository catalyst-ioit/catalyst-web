import { createFileRoute } from '@tanstack/react-router'
import Hero from '../components/hero.tsx';
import About from '../components/about.tsx';
import Process from '../components/process.tsx';
import Offerings from '../components/offerings.tsx';
import Expertise from '../components/expertise.tsx';


export const Route = createFileRoute('/')({
    component: Index
})
export default function Index() {
    return <main>
        <Hero />
        <About />
        <Process />
        <Offerings />
        <Expertise />
    </main>

}