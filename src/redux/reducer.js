import COMMENTS from '../data/comments';
import DISHES from '../data/dishes';
import { combineReducers } from 'redux';
import * as actionTypes from './actionTypes';


let dishReducer = (dishState = DISHES, action) => {

    switch (action.type) {
        default:
            return dishState;
    }
}

let commentReducer = (commentState = COMMENTS, action) => {

    switch (action.type) {
        case actionTypes.ADD_COMMENT:
            let comment = action.payload;
            comment.id = commentState.length;
            comment.date = new Date().toDateString();
            console.log(comment);
            return commentState.concat(comment);
        default:
            return commentState;
    }
}

export let Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer
});