import {takeEvery, put, call} from 'redux-saga/effects'
import axios from 'axios'
import {SAVE_POSTS, POST_POSTS, TAKE_POSTS} from './types'
import {hideLoader, showLoader} from '../actions/postsAction'
import {showAlert} from '../actions/appAction'

export function* sagaWatcher() {
  yield takeEvery(TAKE_POSTS, sagaGetWorker)
  yield takeEvery(POST_POSTS, sagaPostWorker)
}

function* sagaGetWorker() {
  try {
    yield put(showLoader())
    const payload = yield call(fetchPosts)
    yield put({ type: SAVE_POSTS, payload })
    yield put(hideLoader())
  } catch (e) {
    yield put(showAlert('Что-то пошло не так'))
    yield put(hideLoader())
  }
}

async function fetchPosts() {
    const postData = 
  const response = await axios.post('https://simple-blog-api.crew.red/posts', postData)
  return await response.data
}

function* sagaPostWorker() {
  try {
    yield put(showLoader())
    const payload = yield call(fetchPosts)
    yield put({ type: TAKE_POSTS, payload })
    yield put(hideLoader())
  } catch (e) {
    yield put(showAlert('Что-то пошло не так'))
    yield put(hideLoader())
  }
}

async function fetchPosts() {
  const response = await axios.get('https://simple-blog-api.crew.red/posts')
  return await response.data
}