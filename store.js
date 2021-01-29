import * as redux from 'redux';

export const RESULT_SUCCESS = 'result/success';
export const RESULT_WRONG = 'result/wrong';

const initialstate = {
    result: ''
}

const reducer = (state = initialstate, action) => {
    switch(action.type){
        case RESULT_SUCCESS : {
            return { ...state, result: 'Congratulations! You got it right!'};
            break;
        }
        case RESULT_WRONG : {
            return { ...state, result: 'Wrong'};
            break;
        }
        default: {
            return state;
        }
    }
}

const store = redux.createStore(reducer);

export default store;