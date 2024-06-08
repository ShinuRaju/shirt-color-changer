import { Badge, Box, IconButton } from '@mui/material'
import React, { useState } from 'react'
import Dress from './Dress'
import { IColor } from '../Fields/RenderNameField';
import HoverBox from './HoverBox';
import { badgeStyles, dressCard, visibilityIconStyle } from '../styles';
import VisibilityIcon from './VisibilityIcon';

export interface IDressProperties {
    shirtTone: IColor
    pantTone: IColor
    matchPercent: number

}

const DressProperties: React.FC<IDressProperties> = ({ shirtTone, pantTone, matchPercent }) => {
    const [visible, setVisible] = useState<boolean>(false);
    return (<>
        <Box sx={dressCard}>
            <VisibilityIcon color={shirtTone} visible={visible} setVisible={setVisible} />
            <Badge sx={badgeStyles} badgeContent={`${matchPercent}%`} color='secondary' />
            <Dress shirtTone={shirtTone.HEX} pantTone={pantTone.HEX} />
            {visible && <HoverBox shirtColor={shirtTone} pantColor={pantTone} />}
        </Box >
    </>
    )
}

export default DressProperties

