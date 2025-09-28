import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Header from '../components/header.tsx';
import Footer from '../components/footer.tsx';
import { CursorProvider } from '../components/cursorProvider.tsx';
import NotFoundPage from '../components/404.tsx';



const RootLayout = () => (

    <CursorProvider>
        <Header />
        <div className="relative bg-[#111111] text-white/90 font-light overflow-x-hidden">
            <Outlet />
        </div>
        <Footer />
        <TanStackRouterDevtools />
    </CursorProvider>

)

export const Route = createRootRoute({ component: RootLayout, notFoundComponent: NotFoundPage })
