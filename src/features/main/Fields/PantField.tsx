import { useSelector } from 'react-redux';
import { RootState } from '../../dataStore/store';
import { setPantColors } from '../../dataStore/localSlice';
import RenderNameField from './RenderNameField';
import RenderHexField from './RenderHexField';

const PantField = () => {
    const { pantColors, hex } = useSelector((state: RootState) => state.localSlice)

    return (
        <>
            {hex
                ? <RenderHexField label={"Select Pant Colors"} dispatchAction={setPantColors} renderColors={pantColors} />
                : <RenderNameField label={"Select Pant Colors"} dispatchAction={setPantColors} renderColors={pantColors} />
            }
        </>
    )
}

export default PantField


