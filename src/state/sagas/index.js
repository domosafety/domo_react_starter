//see https://github.com/redux-saga/redux-saga/issues/160 for good example
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([]);
}
