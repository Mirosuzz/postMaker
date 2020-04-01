import {takeEvery, put, call} from 'redux-saga/effects'
import axios from 'axios'
import {TAKE_POSTS} from './types'
import {hideLoader, showLoader} from '../actions/postsAction'
import {showAlert} from '../actions/appAction'

export function* sagaWatcher() {
  yield takeEvery(TAKE_POSTS, sagaWorker)
}

function* sagaWorker() {
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