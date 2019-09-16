import { all } from "redux-saga/effects";
import { watchShowConsole} from "../screens/home/HomeSaga";

export default function* rootSaga() {
    yield all([
        watchShowConsole()
    ]);
}