import { createFileRoute } from '@tanstack/react-router'
import PersonSingle from '@/pages/PersonSingle'

export const Route = createFileRoute('/_auth/person/$id')({
    component: RouteComponent,
    params: {
        parse: (params) => ({
            id: Number(params.id),
        }),
    },
})

function RouteComponent() {
    const { id } = Route.useParams()
    return <PersonSingle id={id} />
}
