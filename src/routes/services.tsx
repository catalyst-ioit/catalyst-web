import { createFileRoute } from '@tanstack/react-router'
import WIPPage from '../components/wip.tsx';

export const Route = createFileRoute('/services')({
  component: RouteComponent,
})

function RouteComponent() {
  return <WIPPage />
}
