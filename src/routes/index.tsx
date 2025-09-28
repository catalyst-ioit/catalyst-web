import { createFileRoute } from '@tanstack/react-router'
import Header from '../components/header.tsx';
import Hero from '../components/hero.tsx';
import About from '../components/about.tsx';
import Process from '../components/process.tsx';
import Offerings from '../components/offerings.tsx';
import Expertise from '../components/expertise.tsx';
import Footer from '../components/footer.tsx';


export const Route = createFileRoute('/')({
    component: Index,
})
export default function Index() {
    return <div className="relative bg-[#111111] text-white/90 font-light overflow-x-hidden">
        <Header />
        <main>
            <Hero />
            <About />
            <Process />
            <Offerings />
            <Expertise />
            <Footer />
        </main>
    </div>
}