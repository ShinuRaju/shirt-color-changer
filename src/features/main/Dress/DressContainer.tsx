import { useSelector } from 'react-redux';
import { RootState } from '../../dataStore/store';
import { IMixer, getMixer, multiplyColors, pairColors } from '../utility';
import { Box } from '@mui/material';
import DressProperties from './DressProperties';
import { IColor } from '../Fields/RenderNameField';

const DressContainer = () => {
    const selected = useSelector((state: RootState) => state.localSlice)

    let colorMixer: IMixer[] = getMixer(selected);
    return (
        <>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                {colorMixer.map((e, i) => {
                    return (
                        <DressProperties key={i} matchPercent={e.matchPercent} shirtTone={e.shirtColor} pantTone={e.pantColor} />
                    )
                })}
            </Box >
        </>
    )
}
export default DressContainer
