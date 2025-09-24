import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Navbar from '../components/Navbar.tsx';

const RootLayout = () => (
    <div className='h-screen w-full flex flex-col bg-[url(/homepage/hero_mobile.webp)] md:bg-[url(/homepage/hero_desktop.webp)] bg-cover bg-left' >
        <Navbar />
        <Outlet />
        <TanStackRouterDevtools />
    </div>
)

export const Route = createRootRoute({ component: RootLayout })
