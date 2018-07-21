import React from 'react';
import Messenger from '../components/messenger';
import '../css/app.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
export default class App extends React.Component{
    render(){
        return(
            <div>
                <Messenger />
            </div>
        )
    }
}

