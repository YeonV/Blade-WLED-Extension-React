import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions as effectsActions } from '../../slices/effects';
import { actions as appActions } from '../../slices/app';
import EffectList from '../EffectList';
import { createSelector } from 'reselect';
import AddButton from '../PopoverAdd';
import PopoverInfo from '../PopoverInfo';

const effectSelector = (state) => state.effects;

const appSelector = (state) => state.app;

const effectWithUrlSelector = createSelector(
  effectSelector,
  appSelector,
  (effects, app) => {
    return effects
      .filter(({ name }) => name.includes(app.filterString))
      .map((effect) => {
        return {
          ...effect,
          urlString: `http://${app.ip}/win${
            effect.useFX ? `&FX=${effect.FX}` : ''
          }${effect.useCL ? `&CL=h00${effect.CL.toUpperCase()}` : ''}${
            effect.useC2 ? `&C2=h00${effect.C2.toUpperCase()}` : ''
          }${effect.useC3 ? `&C3=h00${effect.C3.toUpperCase()}` : ''}${
            effect.useA ? `&A=${effect.A}` : ''
          }${effect.useNL ? `&NL=${effect.NL}` : ''}${
            effect.useNT ? `&NT=${effect.NT}` : ''
          }${effect.useNF ? `&NF=${effect.NF}` : ''}${
            effect.useFP ? `&FP=${effect.FP}` : ''
          }${effect.useIX ? `&IX=${effect.IX}` : ''}${
            effect.useSX ? `&SX=${effect.SX}` : ''
          }${effect.useEXTRA ? `${effect.extra}` : ''}`,
        };
      });
  }
);

export default function Http() {
  const dispatch = useDispatch();
  const { filterString, guide } = useSelector(appSelector);
  const userEffects = useSelector(effectWithUrlSelector);
  const effectLabels = useSelector((state) => state.wledEffects);
  const palettesLabels = useSelector((state) => state.wledPalettes);
  return (
    <>
      <div className="globals-wrapper http">
        <div
          className="info-effect-settings"
          style={{
            right: 0,
            top: 25,
            position: 'absolute',
            zIndex: 101,
          }}
        >
          <PopoverInfo text="Live-Search" isOpen={guide} position="right" />
        </div>
        <input
          type="text"
          className="globalInput"
          placeholder="Find effects..."
          value={filterString}
          onChange={(e) => dispatch(appActions.setFilterString(e.target.value))}
          id="searchInput"
        />
      </div>
      <div id="effectlist" className="http">
        <EffectList
          effectList={userEffects}
          filterString={filterString}
          effectLabels={effectLabels}
          palettesLabels={palettesLabels}
          guide={guide}
        ></EffectList>
        <AddButton
          onConfirm={(name) => dispatch(effectsActions.addEffect(name))}
        >
          <div
            className="info-effect-settings"
            style={{ left: -15, top: 22, position: 'relative' }}
          >
            <PopoverInfo
              text="Add New Effect"
              isOpen={guide}
              position="bottom"
            />
          </div>
        </AddButton>
      </div>
    </>
  );
}
