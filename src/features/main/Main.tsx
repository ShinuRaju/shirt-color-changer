import Container from '@mui/material/Container'
import DressContainer from './Dress/DressContainer'
import Fields from './Fields/Fields';
import Options from './Options'

const Main = () => {

    return (
        <Container sx={{ p: 2 }} maxWidth="lg">
            <Fields />
            <Options />
            <DressContainer />
        </Container>
    )
}

export default Main