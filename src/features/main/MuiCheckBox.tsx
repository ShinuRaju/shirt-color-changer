import React from 'react'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../dataStore/store';
import { setShade } from '../dataStore/localSlice';



const MuiCheckBox = () => {
    const dispatch = useDispatch()
    const { shade } = useSelector((state: RootState) => state.localSlice)

    const handleChange = () => {
        dispatch(setShade(!shade))
    }
    return (
        <>
            <FormGroup>
                <FormControlLabel control={<Checkbox onChange={handleChange} checked={shade} />} label="Shade" />
            </FormGroup>
        </>
    )
}

export default MuiCheckBox