import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions as appActions } from '../slices/app';
import PopoverInfo from './PopoverInfo';
import packageJson from '../../package.json';


const appSelector = (state) => state.app;

export default function TopBar() {
  const dispatch = useDispatch();
  const { navi, guide, yz, resetTo } = useSelector(appSelector);
  return (
    <div id="menu">
      <div className="menu-placeholder"></div>
      <div
        id="http"
        className={`menu-item ${navi === 'http' ? 'active' : ''}`}
        onClick={() => {
          dispatch(appActions.setNavi('http'));
          dispatch(appActions.setOpenEffect(''));
        }}
      >
        HTTP
      </div>
      <div
        id="json"
        className={`menu-item ${navi === 'json' ? 'active' : ''}`}
        onClick={() => {
          dispatch(appActions.setNavi('json'));
          dispatch(appActions.setOpenEffect(''));
        }}
      >
        JSON
      </div>

      <div id="settings" className="menu-item">
        Settings
      </div>

      <PopoverInfo
        text="Switch API"
        isOpen={guide}
        position="right"
        style={{ left: 3, top: 0, position: 'relative', zIndex: 101 }}
      />

      <div className="menu-placeholder rest">
        Blade's WLED HTTP/JSON API-Tester -{' '}
        {process.env.REACT_APP_VERSION}
        {packageJson.version}
        <div
          className={`button info ${guide ? 'guide' : ''} ${yz ? 'yz' : ''}`}
          style={{
            position: 'relative',
          }}
          onClick={() => {
            dispatch(appActions.setGuide(!guide));
          }}
        >
          <i className={`fas fa-fw fa-${yz ? 'user-secret' : 'info'}`}></i>
        </div>
      </div>
    </div>
  );
}
