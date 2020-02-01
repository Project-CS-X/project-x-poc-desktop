import React from 'react';
import { hot } from 'react-hot-loader/root';
import Test from '../components/Test'

function App(props) {
    return (
        <div>
            <Test />
        </div>
    )
}

export default hot(App)