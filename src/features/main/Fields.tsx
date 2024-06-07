import React from 'react'
import { Stack } from '@mui/material'
import ShirtText from './ShirtText'
import PantText from './PantText'

const Fields = () => {
    return (
        <>
            <Stack direction={{ xs: "column", sm: "column", md: 'column', lg: "row" }} spacing={2} >
                <ShirtText />
                <PantText />
            </Stack>

        </>
    )
}

export default Fields