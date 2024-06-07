import React, { useRef, useState } from 'react';
import { TextField, Chip, Box } from '@mui/material';
import { setPantColors } from '../dataStore/localSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../dataStore/store';

const isValidHex = (hex: string) => {
    const hexRegex = /^#([0-9A-F]{3}){1,2}$/i;
    return hexRegex.test(hex);
};


const PantText = () => {
    const dispatch = useDispatch()
    const { pantColors } = useSelector((state: RootState) => state.localSlice)
    const [inputValue, setInputValue] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleBlur = (event: any) => {
        event.preventDefault();

        const newColors = inputValue.split(',').map(color => color.trim()).filter(color => isValidHex(color) && !pantColors.includes(color));
        if (newColors.length > 0) {
            dispatch(setPantColors([...pantColors, ...newColors]));
            setInputValue('');
        }

    };

    const handleDelete = (colorToDelete: string) => () => {
        dispatch(setPantColors(pantColors.filter(color => color !== colorToDelete)));
        inputRef.current?.focus();
    };


    return (
        <Box sx={{ width: '100%' }}>
            <TextField
                fullWidth
                variant="outlined"
                label="Enter hex colors"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onBlur={handleBlur}
                inputRef={inputRef}
                InputProps={{
                    startAdornment: (
                        <Box display="flex" flexWrap="wrap" minWidth="200px">
                            {pantColors.map((color, index) => (
                                <Chip
                                    key={index}
                                    label={color}
                                    onDelete={handleDelete(color)}
                                    style={{ backgroundColor: color, color: '#fff', margin: '2px' }}
                                />
                            ))}
                        </Box>
                    )
                }}
            />
        </Box>
    )
}

export default PantText