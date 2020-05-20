import { useDispatch, useSelector } from 'react-redux';
import { actions as appActions } from '../slices/app';

export default async function getCurrentState(ip) {
  const controller = new AbortController();
  const timeout = setTimeout(() => {
    controller.abort();
  }, 500);
  const res = await fetch(`http://${ip}/json/state`, {
    signal: controller.signal,
  });

  return res.json().then((data) => {
    clearTimeout(timeout);
    return data;
  });
}

export async function setWledState(newState = {}, ip) {
  const response = await fetch(`http://${ip}/json/state`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(newState),
  });

  return response.json();
}

const appSelector = (state) => state.app;

export const useOnlineState = () => {
  const { ip, currentState } = useSelector(appSelector);
  const dispatch = useDispatch();

  const getWledState = async () => {
    try {
      const data = await getCurrentState(ip);
      if (data.hasOwnProperty('on')) {
        dispatch(appActions.setOnline(true));
        dispatch(appActions.setCurrentState(data));
      } else {
        dispatch(appActions.setOnline(false));
        dispatch(appActions.setCurrentState({ name: 'FAILED!' }));
      }
    } catch (error) {
      dispatch(appActions.setOnline(false));
      dispatch(appActions.setCurrentState({ name: 'FAILED!' }));
    }
  };

  return { currentState, getWledState };
};
