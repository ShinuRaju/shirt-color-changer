import React from 'react'
import { Box, svgIconClasses } from '@mui/material'
import Shirt from './svgComponents/Shirt'
import ColorPicker from './components/ColorPicker'


const ImageContainer = () => {
    const [value, setValue] = React.useState<string>('#ffffff')

    return (
        <>
            <ColorPicker value={value} setValue={setValue} />
            <Box sx={{ position: "relative" }}>
                <img width="300px" className="background-image" src="https://lh3.googleusercontent.com/pw/AP1GczPxczm4gnjArxJKKRT9JfLo-n5rb966Tl0qz2hxNGrB4Lnd46uKu7XT6SqQ6OIDiqZMEsC1L86HYI-RI24L56zKiITH88_pUndTUPJ_MajqKdSG45Mz_7ZLDlM71gaOcvdpxOVoTA-GayrSWtn6B4rTlg=w490-h869-s-no-gm?authuser=0"
                    alt="asdf" />

                <Box sx={{ position: "absolute", zIndex: 2, top: 0, mixBlendMode: "multiply" }}>
                    <Shirt fillColor={value} />
                </Box>


            </Box >
        </>
    )
}

export default ImageContainer