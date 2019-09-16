import { put, takeLatest } from "redux-saga/effects";
import * as types from "./HomeActions";

export function* handleShowConsole(action) {
  yield put(types.showConsole());
  //perform work logic
}

export function* watchShowConsole() {
  yield takeLatest(types.SHOW_CONSOLE, handleShowConsole);
}
