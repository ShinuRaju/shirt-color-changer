import React from 'react'
import ShowShade from './ShowShade'
import { Stack } from '@mui/material'
import ShowCombinations from './ShowCombinations'
import SortByMatch from './SortByMatch'
import ViewHex from './ViewHex'

const Options = () => {
    return (
        <>
            <Stack direction={'row'}>
                <ViewHex />
                <ShowShade />
                <ShowCombinations />
                <SortByMatch />
            </Stack>
        </>
    )
}

export default Options