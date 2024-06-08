import { useSelector } from 'react-redux';
import { RootState } from '../../dataStore/store';
import { setShirtColors } from '../../dataStore/localSlice';
import RenderNameField from './RenderNameField';
import RenderHexField from './RenderHexField';

const ShirtField = () => {
    const { shirtColors, hex } = useSelector((state: RootState) => state.localSlice)
    return (
        <>
            {hex
                ? <RenderHexField label={"Select Shirt Colors"} dispatchAction={setShirtColors} renderColors={shirtColors} />
                : <RenderNameField label={"Select Shirt Colors"} dispatchAction={setShirtColors} renderColors={shirtColors} />
            }
        </>
    )
}

export default ShirtField



