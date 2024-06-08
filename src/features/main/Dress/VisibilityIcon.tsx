import React from 'react';
import { IconButton } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { visibilityIconStyle } from '../styles';
import { IColor } from '../Fields/RenderNameField';

export interface IVisibilityIcon {
    color: IColor,
    visible: boolean,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const VisibilityIcon: React.FC<IVisibilityIcon> = ({ color, visible, setVisible }) => {
    const handleToggleVisibility = () => {
        setVisible(!visible);
    };

    return (
        <>
            <IconButton sx={visibilityIconStyle(color, visible)} onClick={handleToggleVisibility}>
                {visible ? <VisibilityOff /> : <Visibility />}
            </IconButton>
        </>
    )
}

export default VisibilityIcon