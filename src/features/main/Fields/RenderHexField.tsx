import { Autocomplete, Chip, TextField } from '@mui/material'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import colorJson from '../../dataStore/color.json'
import { autoCompleteListStyle, chipStyle } from '../styles'

export interface IColor {
    "ID": number,
    "HEX": string,
    "COLOR": string
}

export type IActionTypes = "localSlice/setShirtColors" | "localSlice/setPantColors"



export interface IRenderNameField {
    dispatchAction: ActionCreatorWithPayload<Array<IColor>, IActionTypes>
    renderColors: Array<IColor>
    label: string
}

const RenderNameField: React.FC<IRenderNameField> = ({ label, dispatchAction, renderColors }) => {
    const dispatch = useDispatch();

    const handleChange = (event: React.SyntheticEvent<Element, Event>, newValue: IColor[]) => {
        dispatch(dispatchAction(newValue));
    }
    const handleDelete = (index: number) => {
        const newValue = [...renderColors];
        newValue.splice(index, 1);
        dispatch(dispatchAction(newValue));
    };


    return (
        <>
            <Autocomplete
                freeSolo
                fullWidth
                multiple
                value={renderColors}
                onChange={handleChange}
                options={colorJson}
                getOptionLabel={(option: IColor) => option.HEX}
                renderInput={(params) => <TextField {...params} label={label} variant="outlined" />}
                renderOption={(props, option) => (
                    <li  {...props} key={option.ID} style={autoCompleteListStyle(option.HEX)}>
                        {option.HEX}
                    </li>
                )}
                renderTags={(tagValue, getTagProps) =>
                    tagValue.map((option: IColor, index: number) => (
                        <Chip
                            sx={chipStyle(option.HEX)}
                            label={option.HEX}
                            onClick={() => handleDelete(index)}
                            {...getTagProps({ index })}
                            key={option.ID}
                        />
                    ))
                }
            />
        </>
    )
}

export default RenderNameField
