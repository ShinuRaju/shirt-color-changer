import { Box } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from '../dataStore/store'
import { multiplyColors } from './utility'
import DressProperties from './DressProperties'

const DressContainer = () => {
    const { shirtColors, pantColors } = useSelector((state: RootState) => state.localSlice)
    let ShirtPantCombo = multiplyColors(shirtColors, pantColors);
    return (
        <>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                {ShirtPantCombo.map(([shirt, pant], i) => {
                    return (
                        <DressProperties key={i} shirtTone={shirt} pantTone={pant} />
                    )
                })}
            </Box >
        </>
    )
}
export default DressContainer
