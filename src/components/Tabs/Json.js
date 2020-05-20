import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/de';
import { setWledState, useOnlineState } from '../../lib/json';
import { actions as appActions } from '../../slices/app';

const appSelector = (state) => state.app;

export default function Json() {
  const { ip, currentState } = useSelector(appSelector);
  const { getWledState } = useOnlineState();
  const dispatch = useDispatch();
  return (
    <div className="dev2">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div
          className={'button'}
          style={{
            width: '49%',
            position: 'relative',
            borderRadius: 20,
            marginTop: 10,
          }}
          onClick={() => {
            getWledState();
          }}
        >
          GET State
        </div>
        <div
          className={'button'}
          style={{
            width: '49%',
            position: 'relative',
            borderRadius: 20,
            marginTop: 10,
          }}
          onClick={() => setWledState(currentState, ip)}
        >
          SET State
        </div>
      </div>
      <JSONInput
        id="a_unique_id"
        placeholder={currentState}
        onChange={(e) => dispatch(appActions.setCurrentState(e.jsObject))}
        locale={locale}
        height="550px"
        style={{
          outerBox: {
            width: 400,
            textAlign: 'left',
            marginTop: 10,
            height: 'unset',
          },
          container: {
            width: 400,
            height: 450,
          },
          body: {
            borderRadius: 20,
            padding: '10px 5px',
          },
        }}
      />
    </div>
  );
}
