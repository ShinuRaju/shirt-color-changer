import { Stack } from '@mui/material'
import ShirtField from './ShirtField'
import PantField from './PantField'

const Fields = () => {
    return (
        <>
            <Stack direction={{ xs: "column", sm: "column", md: 'column', lg: "row" }} spacing={2} >
                <ShirtField />
                <PantField />
            </Stack >
        </>
    )
}

export default Fields