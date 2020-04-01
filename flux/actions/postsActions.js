import { SAVE_POSTS, TAKE_POSTS, POST_POSTS } from '../types';

export const savePosts = (data) => {
  return {
    type: SAVE_POSTS,
    payload: data
  }
};

export function postPosts() {
  return {
    type: POST_POSTS
  }
}
export function takePosts() {
  return {
    type: TAKE_POSTS
  }
  // return async dispatch => {
  //   try {
  //     dispatch(showLoader())
  //     const response = await axios.get('https://simple-blog-api.crew.red/posts');
  //     console.log(res)
  //     const data = await res.data
  //     dispatch({ type: TAKE_POSTS, payload: data })
  //     dispatch(hideLoader())
  //   } catch (e) {
  //     dispatch(showAlert('Что-то пошло не так'))
  //     dispatch(hideLoader())
  //   }
  // }
}
export function showAlert(text) {
  return dispatch => {
    dispatch({
      type: SHOW_ALERT,
      payload: text
    })

    setTimeout(() => {
      dispatch(hideAlert())
    }, 3000)
  }
}

export function hideAlert() {
  return {
    type: HIDE_ALERT
  }
}


