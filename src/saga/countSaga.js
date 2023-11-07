/* eslint-disable no-unused-vars */
import { put, takeEvery } from 'redux-saga/effects';

import {
  ASYNC_ONE_MINUS,
  ASYNC_ONE_PLUS,
  addCashAction,
  decrementCreator,
  incrementCreator,
} from '../store/cashReducer';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* incrementWorker() {
  yield delay(1000);
  yield put(incrementCreator());
}

function* decrementWorker() {
  yield delay(1000);
  yield put(decrementCreator());
}

export function* countWatcher() {
  yield takeEvery(ASYNC_ONE_PLUS, incrementWorker);
  yield takeEvery(ASYNC_ONE_MINUS, decrementWorker);
}
