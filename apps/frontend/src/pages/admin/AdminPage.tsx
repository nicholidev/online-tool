import { ChevronLeft, Dashboard, PersonAddAlt, Settings } from '@mui/icons-material'
import { styled, SvgIconTypeMap } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { useRights } from '../../hooks/useRights'
import { CustomLink } from '../../reusableComponents/Core/CustomLink'
import { GaladrimRoomsCard } from '../../reusableComponents/Core/GaladrimRoomsCard'
import MainLayout from '../../reusableComponents/layouts/MainLayout'

interface LinkFormat {
    to: string
    text: string
    icon: OverridableComponent<SvgIconTypeMap<unknown, 'svg'>>
}

const allLinks: LinkFormat[] = [
    {
        to: '/admin/createUser',
        text: 'Créer un utilisateur',
        icon: PersonAddAlt,
    },
    {
        to: '/admin/rights',
        text: 'Gerer les droits des utilisateurs',
        icon: Settings,
    },
    {
        to: '/admin/dashboard',
        text: 'Accéder au dashboard',
        icon: Dashboard,
    },
    { to: '/', text: `Retour à l'accueil`, icon: ChevronLeft },
]

const StyledDiv = styled('div')({
    display: 'flex',
    justifyContent: 'center',
})

export const AdminPage = () => {
    useRights('some', ['EVENT_ADMIN', 'RIGHTS_ADMIN', 'USER_ADMIN'], '/')

    return (
        <MainLayout fullscreen>
            <StyledDiv>
                <GaladrimRoomsCard size="large" sx={{ width: '100%', maxWidth: 600 }}>
                    <h1 style={{ textAlign: 'center' }}>Administration</h1>
                    {allLinks.map((link) => (
                        <CustomLink key={link.to} to={link.to} p={1}>
                            <link.icon sx={{ mr: 1 }} />
                            {link.text}
                        </CustomLink>
                    ))}
                </GaladrimRoomsCard>
            </StyledDiv>
        </MainLayout>
    )
}

export default AdminPage
