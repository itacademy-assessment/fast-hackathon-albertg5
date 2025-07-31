import { createLazyFileRoute } from '@tanstack/react-router'
import PersonList from '@/pages/PersonList'

export const Route = createLazyFileRoute('/_auth/person/list')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <>
            <PersonList />
        </>
    )
}
