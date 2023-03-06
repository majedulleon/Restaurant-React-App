import * as actionType from './actionTypes';
import axios from 'axios';
import { baseUrl } from './baseUrl';
import { actionTypes } from 'react-redux-form';

export const addComment = (dishId, rating, author, comment) => (dispatch) => {
    const newComment = {
        dishId: dishId,
        author: author,
        rating: rating,
        comment: comment
    }
    newComment.date = new Date().toISOString();

    axios.post(baseUrl + 'comments', newComment)
        .then(response => response.data)
        .then(comment => dispatch(commentConcat(comment)))
}

export const commentConcat = (comment) => ({
    type: actionType.ADD_COMMENT,
    payload: comment
})


export const commentLoading = () => ({
    type: actionTypes.COMMENT_LOADING
})

export const loadComments = (comments) => ({
    type: actionTypes.LOAD_COMMENTS,
    payload: comments
})

export const fetchComments = (dispatch) => {
    dispatch(commentLoading());

    axios.get(baseUrl + "comments")
        .then(response => response.data)
        .then(comments => dispatch(loadComments(comments)))
}


export const loadDishes = dishes => ({
    type: actionType.LOAD_DISHES,
    payload: dishes
})

export const dishesLoading = () => ({
    type: actionType.DISHES_LOADING
})

export const dishesFailed = (errMess) => ({
    type: actionTypes.DISHES_FAILED,
    payload: errMess
})


export const fetchDishes = () => {
    return dispatch => {
        dispatch(dishesLoading());

        axios.get(baseUrl + 'dishes')
            .then(response => response.data)
            .then(dishes => dispatch(loadDishes(dishes)))
            .catch(error => dispatch(dishesFailed(error.message)))
    }
}