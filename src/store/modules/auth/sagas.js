import { all, takeLatest, call, put } from 'redux-saga/effects';

import useToast from '~/hooks/useToast';
import api from '~/services/api';

import { signInSuccess, signInError } from './actions';

const toast = useToast();

export function* signIn(payload) {
  try {
    const res = yield call(api.post, 'user/login', payload.data);
    api.defaults.headers.Authorization = `Bearer ${res.data.token}`;

    return yield put(signInSuccess(res.data));
  } catch (error) {
    yield put(signInError());

    return toast.errorToast('Email e/ou senha estão incorretos');
  }
}

export function setToken({ payload }) {
  if (!payload || !payload.auth) return;

  const { token } = payload.auth;

  if (token) api.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGNIN_REQUEST', signIn),
]);
