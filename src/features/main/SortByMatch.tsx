import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../dataStore/store'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { setSort } from '../dataStore/localSlice'

const SortByMatch = () => {
    const dispatch = useDispatch()
    const { sort } = useSelector((state: RootState) => state.localSlice)

    const handleChange = () => {
        dispatch(setSort(!sort))
    }
    return (
        <>
            <FormGroup>
                <FormControlLabel control={<Checkbox onChange={handleChange} checked={sort} />} label="Sort by match" />
            </FormGroup>
        </>
    )
}

export default SortByMatch