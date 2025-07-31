import { createLazyFileRoute } from '@tanstack/react-router'
import Index from '@pages/Index.tsx'

export const Route = createLazyFileRoute(`/_frontend/`)({
    component: RouteComponent,
})

function RouteComponent() {
    return <Index />
}
