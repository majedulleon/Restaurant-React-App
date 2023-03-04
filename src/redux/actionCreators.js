import * as actionType from './actionTypes';
import DISHES from '../data/dishes';

export const addComment = (dishId, rating, author, comment) => ({
    type: actionType.ADD_COMMENT,
    payload: {
        dishId: dishId,
        author: author,
        rating: rating,
        comment: comment
    }

})

export const loadDishes = dishes => ({
    type: actionType.LOAD_DISHES,
    payload: dishes
})

export const dishesLoading = () => ({
    type: actionType.DISHES_LOADING
})

export const fetchDishes = () => {
    return dispatch => {
        dispatch(dishesLoading());

        setTimeout(() => { dispatch(loadDishes(DISHES)) }, 2000);

    }
}