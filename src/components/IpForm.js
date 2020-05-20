import React, { useEffect } from 'react';
import PopoverInfo from './PopoverInfo';
import { actions as appActions } from '../slices/app';
import { useDispatch, useSelector } from 'react-redux';
import { useOnlineState } from '../lib/json';

const appSelector = (state) => state.app;

export default function IpForm() {
  const { ip, yz, guide, online } = useSelector(appSelector);
  const dispatch = useDispatch();
  const { getWledState } = useOnlineState();
  useEffect(() => {
    getWledState();
  }, []);
  return (
    <div className="globals-wrapper">
      <PopoverInfo
        text="WLED status"
        isOpen={guide}
        position="left"
        style={{ left: 13, top: 3, position: 'relative' }}
      />

      <li>
        <div
          className={`status ${online ? 'online' : 'offline'}`}
          onDoubleClick={() => {
            if (guide) {
              dispatch(appActions.setYZ(!yz));
              alert('boom');
            }
          }}
        >
          <i className={`fa-fw fas ${online ? 'fa-check' : 'fa-times'}`}></i>
        </div>
      </li>
      <input
        type="text"
        placeholder="Your WLED-IP or mDNS-Name"
        value={ip}
        onChange={(e) => dispatch(appActions.setIp(e.target.value))}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            event.target.blur();
          }
        }}
        onBlur={() => {
          getWledState();
        }}
        className="globalInput"
        id="inputIP"
      />

      <PopoverInfo
        text="WLED IP"
        isOpen={guide}
        position="right"
        style={{ right: 0, top: 0, position: 'relative', zIndex: 101 }}
      />
    </div>
  );
}
