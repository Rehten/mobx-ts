import React, { useState } from 'react';
import { Provider } from 'mobx-react';
import './App.css';
import { RootStore } from './stores/rootStore';
import { Products } from './components/Products';

import 'mobx-react-lite/batchingForReactDom'
import { UserInfo } from './components/UserInfo';

const rootStore: RootStore = new RootStore();

function App() {
    const [isConfirmed, setConfirmed] = useState<boolean>(false);

    return (
        <Provider {...rootStore}>
            {
                !isConfirmed
                &&
                <button onClick={() => setConfirmed(true)}>Подтвердить корректность данных</button>
            }
            <Products/>
            <UserInfo isConfirmed={isConfirmed}/>
        </Provider>
    );
}

export default App;
