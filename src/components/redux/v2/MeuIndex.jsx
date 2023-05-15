import TelaPrincipal from './components/redux/v1/TelaPrincipal';
import { Store } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';


const MeuIndex = () =>{
    return (
        <>
        <Provider store={store}>
            <TelaPrincipal/>

        </Provider>
        </>
    )
}

export default MeuIndex;