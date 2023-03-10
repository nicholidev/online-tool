import { Fab, SvgIconTypeMap } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { FC } from 'react'
import { AppStore } from '../../globalStores/AppStore'

export interface LinkInfo {
    Icon: OverridableComponent<SvgIconTypeMap<unknown, 'svg'>> & {
        muiName: string
    }
    link: string
    hidden?: boolean
}

export const POS_OFFSET = 32
const POS_INCREMENT = 64

export const RoundedLinks: FC<{
    linkInfos: LinkInfo[]
    horizontalPosition?: 'left' | 'right'
    verticalPosition?: 'top' | 'bottom'
}> = ({ linkInfos, horizontalPosition = 'left', verticalPosition = 'top' }) => {
    const visibleLinks = linkInfos.filter(({ hidden }) => hidden !== true)

    const handleClick = (link: string) => {
        if (link.includes('http')) {
            window.open(link)
            return
        }
        AppStore.navigate(link)
    }

    return (
        <>
            {visibleLinks.map(({ link, Icon }, index) => (
                <Fab
                    key={link}
                    size="medium"
                    variant="circular"
                    color="primary"
                    onClick={() => handleClick(link)}
                    sx={{
                        position: 'absolute',
                        [verticalPosition]: POS_OFFSET + POS_INCREMENT * index,
                        [horizontalPosition]: POS_OFFSET,
                    }}
                >
                    <Icon />
                </Fab>
            ))}
        </>
    )
}
