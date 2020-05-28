import React, { useState, useEffect } from 'react';
import InputGroup from '../InputGroup';
import ToggleColor from '../ToggleColor';
import ToggleSlider from '../ToggleSlider';
import ToggleSelect from '../ToggleSelect';
import ToggleText from '../ToggleText';
import PopoverInfo from '../PopoverInfo';

export default function ItemDetails(props) {
  const [showPopovers, setShowPopovers] = useState(false);
  useEffect(() => {
    setShowPopovers(true);
  }, []);
  return (
    <div className={'settings show'}>
      <div className="settings-row flexFirst">
        <InputGroup label={'URL'}>
          <div className="url" target="hiddenFrame" href={props.urlString}>
            {props.urlString}
          </div>
        </InputGroup>
      </div>
      <div className="settings-row flexLast">
        <InputGroup label={'Color1'} style={{ minWidth: 110 }}>
          <ToggleColor
            value={props.cl}
            onChange={(e) => {
              props.onChange('cl', e.target.value.replace('#', ''), props.name);
            }}
            active={props.useCL}
            onToggle={() => {
              props.onToggle('useCL', !props.useCL, props.name);
            }}
          />
        </InputGroup>

        <InputGroup label={'Color2'}>
          <PopoverInfo
            text="Toggle Parameter"
            isOpen={showPopovers && props.guide}
            position="bottom"
            style={{ left: 20, bottom: 20 }}
          />

          <ToggleColor
            value={props.c2}
            onChange={(e) => {
              props.onChange('c2', e.target.value.replace('#', ''), props.name);
            }}
            active={props.useC2}
            onToggle={() => {
              props.onToggle('useC2', !props.useC2, props.name);
            }}
          />
          <PopoverInfo
            text="Change Value"
            isOpen={props.guide && showPopovers}
            position="top"
            style={{ right: 30, top: -10, position: 'relative' }}
          />
        </InputGroup>

        <InputGroup label={'Color3'}>
          <ToggleColor
            value={props.c3}
            onChange={(e) => {
              props.onChange('c3', e.target.value.replace('#', ''), props.name);
            }}
            active={props.useC3}
            onToggle={() => {
              props.onToggle('useC3', !props.useC3, props.name);
            }}
          />
        </InputGroup>
        <InputGroup label={'Extra'}>
          <ToggleText
            icon={'fas fa-moon'}
            value={props.extra}
            onChange={(e) => {
              props.onChange(
                'extra',
                e.target.value.replace('#', ''),
                props.name
              );
            }}
            active={props.useEXTRA}
            onToggle={() => {
              props.onToggle('useEXTRA', !props.useEXTRA, props.name);
            }}
          />
        </InputGroup>
      </div>
      <div className="settings-row">
        <InputGroup label={'Nightlight'}>
          <ToggleSelect
            icon={'fas fa-moon'}
            value={props.nf}
            onChange={(e) => {
              props.onChange('nf', e.target.value.replace('#', ''), props.name);
            }}
            active={props.useNF}
            onToggle={() => {
              props.onToggle('useNF', !props.useNF, props.name);
            }}
            labels={['No Fade', 'Brightness Only', 'Brightness & Colors']}
          />
        </InputGroup>
        <InputGroup label={'Start'}>
          <ToggleSlider
            icon={'fas fa-sun'}
            value={props.brightnessStart}
            onChange={(e) => {
              props.onChange(
                'brightnessStart',
                e.target.value.replace('#', ''),
                props.name
              );
            }}
            active={props.useA}
            onToggle={() => {
              props.onToggle('useA', !props.useA, props.name);
            }}
          />
        </InputGroup>
        <InputGroup label={'End'}>
          <ToggleSlider
            icon={'fas fa-sun'}
            value={props.brightnessEnd}
            onChange={(e) => {
              props.onChange(
                'brightnessEnd',
                e.target.value.replace('#', ''),
                props.name
              );
            }}
            active={props.useNT}
            onToggle={() => {
              props.onToggle('useNT', !props.useNT, props.name);
            }}
          />
        </InputGroup>
        <InputGroup label={'Time'}>
          <ToggleSlider
            icon={'fas fa-stopwatch'}
            value={props.timeInMin}
            onChange={(e) => {
              props.onChange(
                'timeInMin',
                e.target.value.replace('#', ''),
                props.name
              );
            }}
            active={props.useNL}
            onToggle={() => {
              props.onToggle('useNL', !props.useNL, props.name);
            }}
            min={1}
            max={120}
          />
        </InputGroup>
      </div>

      <div className="settings-row flexFirst">
        <InputGroup label={'FX'} style={{ flex: 1 }}>
          <ToggleSelect
            icon={'fas fa-magic'}
            value={props.fx}
            onChange={(e) => {
              props.onChange('fx', e.target.value.replace('#', ''), props.name);
            }}
            active={props.useFX}
            onToggle={() => {
              props.onToggle('useFX', !props.useFX, props.name);
            }}
            labels={props.effectLabels}
          />
          <ToggleSlider
            icon={'fas fa-stopwatch'}
            value={props.fxSpeed}
            onChange={(e) => {
              props.onChange(
                'fxSpeed',
                e.target.value.replace('#', ''),
                props.name
              );
            }}
            classes={"mr15"}
            active={props.useSX}
            onToggle={() => {
              props.onToggle('useSX', !props.useSX, props.name);
            }}
          />
          <ToggleSlider
            icon={'fas fa-tachometer-alt'}
            value={props.ix}
            onChange={(e) => {
              props.onChange('ix', e.target.value.replace('#', ''), props.name);
            }}
            active={props.useIX}
            onToggle={() => {
              props.onToggle('useIX', !props.useIX, props.name);
            }}
          />
        </InputGroup>
        <InputGroup label={'PALETTE'}>
          <ToggleSelect
            icon={'fas fa-swatchbook'}
            value={props.fp}
            onChange={(e) => {
              props.onChange('fp', e.target.value.replace('#', ''), props.name);
            }}
            active={props.useFP}
            onToggle={() => {
              props.onToggle('useFP', !props.useFP, props.name);
            }}
            labels={props.palettesLabels}
          />
        </InputGroup>
      </div>
      <div className="settings-row"></div>
    </div>
  );
}
