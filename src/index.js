import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const intialState = {
    count : 0
};

const reducer = (state = intialState , action) =>{

    switch(action.type)
    {
        case "INCREMENT" : return {...state ,count : state.count+1};
        case "DECREMENT" : return {...state,count : state.count-1};
        default : return state;
    }
    
  }

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
