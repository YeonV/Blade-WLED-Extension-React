import React, { useEffect } from 'react';
import Item from './Item';
import StaticItem from './StaticItem';
import { useDispatch, useSelector } from 'react-redux';
import { calcTimeDelta } from 'react-countdown';
import { actions as appActions } from '../../slices/app';
import { actions as effectActions } from '../../slices/effects';
import { setWledState } from '../../lib/json';

const EffectList = ({ effectList, effectLabels, palettesLabels, guide }) => {
  const { ip, yz, currentState, activeEffect, activeDuration } = useSelector(
    (state) => state.app
  );
  const alreadyActive = calcTimeDelta(activeDuration).total > 0;
  const completed = calcTimeDelta(activeDuration).completed;
  const dispatch = useDispatch();

  const openEffect = useSelector((state) => state.app.openEffect);

  useEffect(() => {
    const currentEffect = effectList.find(({ name }) => name === activeEffect);
    if (currentEffect && currentEffect.useNL) {
      if (!alreadyActive && completed) {
        dispatch(appActions.setActiveDuration(0));
        dispatch(appActions.setActiveEffect(''));
      }
    }
  }, []);
  return effectList.map((e, i) => {
    const props = {
      key: e.name,
      i: i,
      effectLabels: effectLabels,
      palettesLabels: palettesLabels,
      guide: guide,
      activeDuration: activeEffect === e.name ? activeDuration : 0,
      active: e.name === activeEffect,
      expanded: e.name === openEffect,
      onExpand: (open) => {
        if (!open) {
          dispatch(appActions.setOpenEffect(''));
          return;
        }
        dispatch(appActions.setOpenEffect(e.name));
      },
      onReset: () => {
        yz && console.log('NOT same element');
        setWledState(currentState, ip); // sent stored state to WLED
        dispatch(appActions.setActiveDuration(0));
        dispatch(appActions.setActiveEffect(''));
      },
      onActivate: () => {
        if (e.useNL) {
          const endTime = new Date(Date.now() + e.timeInMin * 60000);
          dispatch(appActions.setActiveDuration(endTime));
        }
        dispatch(appActions.setActiveEffect(e.name));
        yz && console.log('Starting Countdown');
        window.chrome.runtime.sendMessage({
          type: 'yz2',
          url: e.urlString,
        });
        yz && console.log('SENT');
      },
      onCountdownComplete: () => {
        dispatch(appActions.setActiveDuration(0));
        dispatch(appActions.setActiveEffect(''));
      },
      onChange: (prop, value, name) => {
        dispatch(
          effectActions.updateEffect({
            name: name,
            [prop]: value,
          })
        );
      },
      onToggle: (prop, value, name) => {
        dispatch(effectActions.updateEffect({ name: name, [prop]: value }));
      },
      ...e,
    };
    return e.useNL ? (
      <Item {...props}></Item>
    ) : (
      <StaticItem {...props}></StaticItem>
    );
  });
};
export default EffectList;
