import { Badge, Box } from '@mui/material'
import React from 'react'
import Dress from './Dress'
import { calculateColorMatchScore } from './utility'

export interface IDressProperties {
    shirtTone: string
    pantTone: string

}

const DressProperties: React.FC<IDressProperties> = ({ shirtTone, pantTone }) => {

    let percent = calculateColorMatchScore(shirtTone, pantTone)

    return (
        <Box sx={dressCard}>
            {/* <Badge sx={badgeStyles} badgeContent={percent} color='secondary' /> */}
            <Dress shirtTone={shirtTone} pantTone={pantTone} />
        </Box >
    )
}

export default DressProperties

export const dressCard = {
    position: 'relative',
    borderRadius: "5px",
    m: 1,
    p: 1,
    bgcolor: "#F5F5F5",
    width: "170px",
    flex: 1,
    display: 'grid',
    placeItems: "center"
}

export const badgeStyles = {
    position: 'absolute',
    right: 0,
    top: 0
}