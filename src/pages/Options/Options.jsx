import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { persistor } from '../../lib/create-store';

import './Options.css';
import { actions as appActions } from '../../slices/app';
import PopoverSure from '../../components/PopoverSure';
window.persistor = persistor;
const Options = () => {
  const { resetTo } = useSelector((state) => state.app);
  const effectsJson = useSelector((state) => state.effectsJson);
  const dispatch = useDispatch();
  return (
    <div className="OptionsContainer">
      <center>
        <h2>Options</h2>
      </center>
      <div className="row">
        <div className="title">Abort Effect State</div>
        <select
          value={resetTo}
          onChange={(e) => {
            dispatch(appActions.setResetTo(e.target.value));
          }}
        >
          <option value="default">Default</option>
          <option value="lastState">Last State</option>
          {effectsJson
            .filter((i) => !['default', 'lastState'].includes(i.name))
            .map((item) => (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            ))}
        </select>
      </div>
      <div className="row">
        <div className="title">Factory Reset</div>
        <PopoverSure
          onConfirm={() => {
            persistor.purge();
            window.location.href = 'options.html';
          }}
          icon={'fa-fw fas fa-trash-alt'}
        >
          Clear All Data
        </PopoverSure>
      </div>
    </div>
  );
};

export default Options;
