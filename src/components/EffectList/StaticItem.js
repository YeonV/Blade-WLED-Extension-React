import React from 'react';
import { useSelector } from 'react-redux';
import PopoverInfo from '../PopoverInfo';
import ItemDetails from './ItemDetails';
import EffectButtons from './EffectButtons';

const StaticItem = (props) => {
  const {
    name,
    urlString,
    active,
    onActivate,
    onUpdate,
    onToggle,
    i,
    guide,
    onExpand,
    expanded,
  } = props;

  const yz = useSelector((state) => state.app.yz);

  return (
    <div
      key={name}
      className={`effect ${active ? 'active' : ''} ${expanded ? 'show' : ''}`}
    >
      <div className="title">
        <div
          className="title-url"
          onClick={() => {
            onActivate();
            yz && console.log('Is Static');
          }}
        >
          {name}
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
export default StaticItem;
