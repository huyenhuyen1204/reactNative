// /** @format */

// import {AppRegistry} from 'react-native';
// import Calculator from './src/component/calculator/caculalor';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => Calculator);

// /** @format */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
const {createStore} = require('redux');

const defaultState  = {value : 0};

/**
 * Sd state, action de tinh toan state ms
 */
const reducer = (state = defaultState, action) => {
    if(action.type === 'UP') {
        return {value: state.value + 1};
    }else if (action.type === 'DOWN'){
        return {value : state.value - 1};
    }
    return state;
}

const store = createStore(reducer);
/**
 *  Action Up, Down
 * How to tiep can gia tri state?
 * Thay doi gia tri state?
 */

 // Chi dc get, k dc set
 const mState = store.getState().value;
 console.log(mState);

//Thay doi va nhan vao 1 action = obj
 store.dispatch({type : 'UP'});
 store.dispatch({type : 'UP'});

 console.log(store.getState().value);

 /**
  * Cau truc tao:
  * 1. require
  * 2. defaulState, reducer(gom state va action)
  * 4. CreateStore (reducer)
  */

