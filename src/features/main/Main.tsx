import Container from '@mui/material/Container'
import MuiCheckBox from './MuiCheckBox'
import DressContainer from './DressContainer'
import Fields from './Fields'

const Main = () => {
    return (
        <Container maxWidth="lg">
            <Fields />
            <MuiCheckBox />
            <DressContainer />
        </Container>
    )
}

export default Main