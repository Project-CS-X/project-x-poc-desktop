import React from 'react';
import { hot } from 'react-hot-loader/root';
import Test from './Test'

function HotAppContainer(props) {
    return (
        <div>
            <p>Test</p>
            <Test />
        </div>
    )   
}

export default hot(HotAppContainer)