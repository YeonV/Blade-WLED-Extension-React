import React from 'react';
import { useDispatch } from 'react-redux';
import { actions as effectActions } from '../../slices/effects';
import DeleteButtonPopover from '../PopoverSure';
import ShareButton from '../ShareButton';
import CopyButton from '../CopyButton';
import PopoverInfo from '../PopoverInfo';
export default function EffectButtons({ name, urlString, i, guide }) {
  const dispatch = useDispatch();
  if (name === 'sunrise') {
    return <></>;
  }
  return (
    <div className="effect-button-wrapper">
      <DeleteButtonPopover
        onConfirm={() => {
          dispatch(effectActions.removeEffect(name));
        }}
      />
      <ShareButton name={name} urlString={urlString} />
      <PopoverInfo
        text="Share on CMS"
        isOpen={i === 1 && guide}
        position="bottom"
        style={{ left: -25, top: 0, position: 'relative' }}
      />
      <CopyButton urlString={urlString} />
      <PopoverInfo
        text="Copy URL"
        isOpen={i === 1 && guide}
        position="top"
        style={{ left: -25, top: 0, position: 'relative' }}
      />
    </div>
  );
}
