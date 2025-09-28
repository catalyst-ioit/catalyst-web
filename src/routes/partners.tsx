import { createFileRoute } from '@tanstack/react-router'
import WIPPage from '../components/wip.tsx';

export const Route = createFileRoute('/partners')({
  component: RouteComponent,
})

function RouteComponent() {
  return <WIPPage />
}
