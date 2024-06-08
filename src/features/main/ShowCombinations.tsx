import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../dataStore/store'
import { setCombinations } from '../dataStore/localSlice'

const ShowCombinations = () => {
    const dispatch = useDispatch()
    const { combinations } = useSelector((state: RootState) => state.localSlice)

    const handleChange = () => {
        dispatch(setCombinations(!combinations))
    }
    return (
        <>
            <FormGroup>
                <FormControlLabel control={<Checkbox onChange={handleChange} checked={combinations} />} label="Show Combinations" />
            </FormGroup>
        </>
    )
}

export default ShowCombinations