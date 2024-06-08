import { Box } from '@mui/material';
import React from 'react';
import { IColor } from '../Fields/RenderNameField';
import { subTempBox, tempBox } from '../styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../dataStore/store';

export interface IHoverBox {
    shirtColor: IColor;
    pantColor: IColor;
}

const HoverBox: React.FC<IHoverBox> = ({ shirtColor, pantColor }) => {
    const { hex } = useSelector((state: RootState) => state.localSlice)

    return (
        <>
            <Box sx={tempBox}  >
                <Box sx={subTempBox(shirtColor)}>{hex ? shirtColor.HEX : shirtColor.COLOR}</Box>
                <Box sx={subTempBox(pantColor)}>{hex ? pantColor.HEX : pantColor.COLOR}</Box>
            </Box>
        </>
    )
}

export default HoverBox

