import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/de';
import { setWledState, useOnlineState } from '../../lib/json';
import { actions as appActions } from '../../slices/app';
import { actions as effectJsonActions } from '../../slices/effectsJson';
import AddButton from '../PopoverAdd';
import { actions as effectsJsonActions } from '../../slices/effectsJson';
import PopoverSure from '../PopoverSure';

const appSelector = (state) => state.app;

export default function Json() {
  const { ip, currentState } = useSelector(appSelector);
  const { getWledState } = useOnlineState();
  const dispatch = useDispatch();
  const effectsJson = useSelector((state) => state.effectsJson);
  return (
    <div className="dev2">
      <div style={{ display: 'flex' }}>
        <div>
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
              <i
                className={'fa-fw fas fa-download'}
                style={{
                  marginRight: '0.5rem',
                }}
              ></i>
              GET JSON
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
              <i
                className={'fa-fw fas fa-upload'}
                style={{
                  marginRight: '0.5rem',
                }}
              ></i>
              SET JSON
            </div>
          </div>
          <JSONInput
            id="jsonEditor"
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
        <div style={{ fontSize: '1rem' }}>
          <AddButton
            onConfirm={(name) => {
              dispatch(effectsJsonActions.addEffect(name));
              dispatch(
                effectJsonActions.updateEffect({ name: name, ...currentState })
              );
            }}
            style={{
              width: '200px',
              borderRadius: '20px',
              fontSize: '14px',
              height: '30px',
              margin: '10px 0px 0px 10px',
            }}
            icon={'fa-fw fas fa-save'}
          >
            <div>Save JSON</div>
          </AddButton>
          <div className="scroll4" style={{ height: 450, overflowY: 'auto' }}>
            {effectsJson
              .filter((i) => !['default', 'lastState'].includes(i.name))
              .map((item) => (
                <div
                  className="button"
                  style={{
                    position: 'relative',
                    width: '200px',
                    height: '40px',
                    borderRadius: '20px',
                    marginTop: 10,
                    marginLeft: 10,
                    minWidth: '200px',
                  }}
                  onClick={() => {
                    setWledState(item, ip);
                  }}
                >
                  <PopoverSure
                    onConfirm={() => {
                      dispatch(effectJsonActions.removeEffect(item.name));
                    }}
                    style={{
                      left: 5,
                      bottom: 3,
                      display: 'flex',
                      opacity: 0.7,
                    }}
                  />
                  {item.name}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
