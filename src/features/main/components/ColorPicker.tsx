import React from 'react'
import { MuiColorInput } from 'mui-color-input'

export interface IMyComponent {
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
}

const MyComponent: React.FC<IMyComponent> = ({ value, setValue }) => {

    const handleChange = (newValue: string) => {
        setValue(newValue)
    }

    return <MuiColorInput format="hex" value={value} onChange={handleChange} />
}

export default MyComponent;