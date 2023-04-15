import { call, put, take, takeEvery } from 'redux-saga/effects';
import { ActionTypes } from './ActionTypes';
// import {} from './api';

// function* fetchUserOTPSaga(action) {
//     try {
//       const result = yield call(fetchUserOTP, action.payload);
//       yield put({ type: ActionTypes.FETCH_OTP_SUCCESS, result });
//     } catch (error) {
//       yield put({ type: ActionTypes.FETCH_OTP_ERROR, error });
//     }
//   }

export default function* watchUserSaga() {
}
