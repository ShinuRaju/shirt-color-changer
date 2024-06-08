import React from 'react'
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../dataStore/store'
import { setHex } from '../dataStore/localSlice'

const ViewHex = () => {
    const dispatch = useDispatch()
    const { hex } = useSelector((state: RootState) => state.localSlice)

    const handleChange = () => {
        dispatch(setHex(!hex));
    };

    return (
        <>
            <FormGroup>
                <FormControlLabel control={<Checkbox onChange={handleChange} checked={hex} />} label="View Hex" />
            </FormGroup>
        </>
    )
}

export default ViewHex