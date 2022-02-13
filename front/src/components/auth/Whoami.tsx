import { Button } from '@mui/material'
import { AppStore } from '../../stores/AppStore'
import { WhoamiStore } from './WhoamiStore'

export const Whoami = () => {
    const { authStore } = AppStore
    const store = new WhoamiStore()

    return (
        <>
            <Button variant="outlined" color="error" onClick={() => authStore.logout()}>
                Se déconnecter
            </Button>
            <p onClick={() => store.onClick()} style={{ textAlign: 'center', userSelect: 'none' }}>
                {authStore.user.username}
            </p>
        </>
    )
}
