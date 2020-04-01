import { SAVE_POSTS, TAKE_POSTS, HIDE_ALERT, SHOW_ALERT } from '../types';
const initialState = {
    isNewPost: false,
    alert: null,
    posts: [{
        title: '',
        id: '',
        body: ""
    }]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SAVE_POSTS:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            };
        case TAKE_POSTS:
            return {
                ...state,
                posts: action.payload
            };
        case SHOW_ALERT:
            return { ...state, alert: action.payload }
        case HIDE_ALERT:
            return { ...state, alert: null }
        default:
            return state
    }
}
