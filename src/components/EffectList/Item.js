import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import PopoverInfo from '../PopoverInfo';
import Countdown, { calcTimeDelta } from 'react-countdown';
import CountdownRenderer from './CountdownRenderer';

import ItemDetails from './ItemDetails';
import EffectButtons from './EffectButtons';

const Item = (props) => {
  const {
    name,
    expanded,
    urlString,
    activeDuration,
    active,
    onReset,
    onActivate,
    onCountdownComplete,
    onUpdate,
    onToggle,
    onExpand,
    i,
    guide,
  } = props;

  const alreadyActive = calcTimeDelta(activeDuration).total > 0;
  const yz = useSelector((state) => state.app.yz);

  const countdownApi = useRef();

  useEffect(() => {
    if (countdownApi.current && activeDuration > 0) {
      if (activeDuration > 0) {
        countdownApi.current.start();
      }
    } else {
    }
  }, [countdownApi, activeDuration]);

  return (
    <div
      key={name}
      className={`effect ${active ? 'active' : ''} ${expanded ? 'show' : ''}`}
    >
      <div className="title">
        <div
          className="title-url"
          onClick={() => {
            yz && console.log('Is NOT Static');
            if (active) {
              onReset();
            } else {
              onActivate();
            }
          }}
        >
          {name}
          {!!activeDuration && (
            <Countdown
              renderer={CountdownRenderer}
              date={activeDuration}
              autoStart={alreadyActive}
              ref={countdownApi}
              controlled={false}
              onComplete={() => {
                onCountdownComplete();
              }}
            />
          )}
        </div>

        <EffectButtons
          urlString={urlString}
          i={i}
          guide={guide}
          name={name}
        ></EffectButtons>
        <div
          className="settingsButton"
          onClick={() => {
            onExpand(!expanded);
          }}
        >
          <div className={`chevron-arrow ${expanded ? 'up' : 'down'}`}></div>
          <div
            className="info-effect-settings"
            style={{ left: 3, top: 0, position: 'relative' }}
          >
            <PopoverInfo
              text="Effect-Settings"
              isOpen={props.i === 0 && props.guide}
              position="right"
            />
          </div>
        </div>
      </div>
      {expanded ? (
        <ItemDetails
          onUpdate={onUpdate}
          onToggle={onToggle}
          {...props}
        ></ItemDetails>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Item;
