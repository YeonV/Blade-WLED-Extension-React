import React, { useState } from 'react';

const EffectDetails = ({
  effectList,
  filterString,
  effectLabels,
  palettesLabels,
}) => {
  console.log('INNER:', effectLabels);
  const [expanded, setExpanded] = useState(false);

  console.log('EXPANDED:', expanded);
  const globals = {
    wledEffects: null,
  };

  return (
    effectList
      // .filter((p) => p.toLowerCase() !== 'template')
      // .filter((p) => p.toLowerCase().includes(filterString.toLowerCase()))
      .map((e) => (
        <div
          key={e.name}
          className={`effect ${e.name === 'template' ? 'template dev' : ''} 
        ${expanded ? 'show' : ''}`}
        >
          <div className="title">
            <a className="title-url" target="hiddenFrame" href={e.urlString}>
              {e.name}
              <span className="countdown"></span>
            </a>

            {e.name === 'template' ? (
              ''
            ) : e.name === 'sunrise' ? (
              ''
            ) : (
              <>
                <div className="deleteButton dev">
                  <i className="icons">&#xe037;</i>
                </div>
                <div className="shareButton dev">
                  <i className="fa-fw fas fa-share-alt"></i>
                </div>
              </>
            )}
            <div
              className="settingsButton"
              onClick={() => {
                setExpanded(!expanded);
              }}
            >
              <div
                className={`chevron-arrow ${expanded ? 'up' : 'down'}`}
              ></div>
            </div>
          </div>
          <div className={`settings ${expanded ? 'show' : ''}`}>
            <div className="settings-row">
              <div className="settings-row-group floating mw100">
                <label className="floating">URL</label>
                <a className="url" target="hiddenFrame" href={e.urlString}>
                  ${e.urlString}
                </a>
              </div>
            </div>
            <div className="settings-row">
              <div className="settings-row-group floating mw205">
                <label className="floating">Color1</label>

                <i
                  className={`icons ${e.useCL ? 'active' : ''} cl`}
                  style={{ marginRight: '0.5rem' }}
                  onClick={(e) => {
                    alert(e);
                  }}
                >
                  &#xe2b3;
                </i>

                <input
                  className="colorPickerOne"
                  type="color"
                  value={`#${e.colorOne || '000000'}`}
                  onChange={() => {}}
                />
              </div>
              <div className="settings-row-group floating mw205">
                <label className="floating">Color2</label>
                <i
                  className={`icons ${e.useC2 ? 'active' : ''} c2`}
                  style={{ marginRight: '0.5rem' }}
                >
                  &#xe2b3;
                </i>
                <input
                  className="colorPickerTwo"
                  type="color"
                  value={`#${e.colorTwo || '000000'}`}
                  onChange={() => {}}
                />
              </div>
              <div className="settings-row-group floating mw205">
                <label className="floating">Color3</label>
                <i
                  className={`icons ${e.useC3 ? 'active' : ''} c3`}
                  style={{ marginRight: '0.5rem' }}
                >
                  &#xe2b3;
                </i>
                <input
                  className="colorPickerThree"
                  type="color"
                  value={`#${e.colorThree || '000000'}`}
                  onChange={() => {}}
                />
              </div>
              <div
                className="settings-row-group floating"
                style={{ flex: '1' }}
              >
                <label className="floating">Extra:</label>
                <i
                  className={`icons ${e.useEXTRA ? 'active' : ''} extra`}
                  style={{ marginRight: '0.5rem' }}
                >
                  &#xe23d;
                </i>
                <input
                  className="extra "
                  type="text"
                  value={e.extra}
                  onChange={() => {}}
                  style={{ flex: '1' }}
                />
              </div>
            </div>
            <div className="settings-row">
              <div className="settings-row-group floating wrap slim">
                <label className="floating">Nightlight:</label>
                <div>
                  <i
                    className={`${
                      e.useNF ? 'active' : ''
                    } nf fas fa-fw fa-moon`}
                    style={{ marginRight: '0.5rem' }}
                  ></i>
                  <input
                    style={{ width: '60px' }}
                    className="nf"
                    min="0"
                    max="2"
                    type="number"
                    value={e.nf || 2}
                    onChange={() => {}}
                  />
                </div>
              </div>
              <div className="settings-row-group floating mw205">
                <label className="floating">Start</label>
                <i
                  className={`icons ${e.useA ? 'active' : ''} brightnessA`}
                  style={{ marginLeft: '1rem', marginRight: '0.5rem' }}
                >
                  &#xe2a6;
                </i>
                <input
                  className="brightStart"
                  type="range"
                  min="0"
                  max="255"
                  value={e.brightnessStart || 255}
                  onChange={() => {}}
                />
              </div>
              <div className="settings-row-group floating mw205">
                <label className="floating">End</label>
                <i
                  className={`icons ${e.useNT ? 'active' : ''} brightnessB`}
                  style={{ marginLeft: '1rem', marginRight: '0.5rem' }}
                >
                  &#xe2a6;
                </i>
                <input
                  className="brightEnd"
                  type="range"
                  min="0"
                  max="255"
                  value={e.brightnessEnd || 0}
                  onChange={() => {}}
                />
              </div>
              <div className="settings-row-group floating mw205 slim">
                <label className="floating">Time in Min</label>
                <i
                  className={`icons ${e.useNL ? 'active' : ''} nl`}
                  style={{ marginRight: '0.5rem' }}
                >
                  &#xe325;
                </i>
                <input
                  className="time"
                  type="range"
                  min="1"
                  max="120"
                  value={e.timeInMin || 1}
                  onChange={() => {}}
                />
              </div>
            </div>

            <div className="settings-row">
              <div className="settings-row-group floating wrap slim">
                <label className="floating">FX:</label>
                <div>
                  <i
                    className={`${
                      e.useFX ? 'active' : ''
                    } fx fas fa-fw fa-magic`}
                    style={{ marginRight: '0.5rem' }}
                  ></i>

                  {effectLabels ? (
                    <select
                      id="fxList"
                      className="fx"
                      onChange={() => {}}
                      value={e.fx}
                    >
                      {effectLabels.map((ele, i) => (
                        <option
                          key={i}
                          onChange={() => {}}
                          selected={e.fx === i ? 'selected' : ''}
                          value={i}
                        >
                          {ele}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      style={{ width: '60px' }}
                      className="fx"
                      min="0"
                      max="150"
                      type="number"
                      value={e.fx || 0}
                      onChange={() => {}}
                    />
                  )}
                </div>
                <div>
                  <i
                    className={`icons ${e.useSX ? 'active' : ''} sx ml1`}
                    style={{ marginRight: '0.5rem' }}
                  >
                    &#xe325;
                  </i>
                  <input
                    className="fxSpeed"
                    type="range"
                    min="0"
                    max="255"
                    value={e.fxSpeed || 128}
                    onChange={() => {}}
                  />
                </div>
                <div>
                  <i
                    className={`icons ${e.useIX ? 'active' : ''} ix ml1`}
                    style={{ marginRight: '0.5rem' }}
                  >
                    &#xe409;
                  </i>
                  <input
                    className="ix"
                    type="range"
                    min="0"
                    max="255"
                    value={e.ix || 128}
                    onChange={() => {}}
                  />
                </div>
              </div>
              <div
                className="settings-row-group floating ml1 slim"
                style={{ flex: 1 }}
              >
                <label className="floating">PALETTE:</label>
                <i
                  className={`${
                    e.useFP ? 'active' : ''
                  } fp fas fa-fw fa-swatchbook`}
                  style={{ marginRight: '0.5rem' }}
                ></i>

                {palettesLabels ? (
                  <select
                    id="fpList"
                    style={{ flex: 1, marginRight: '10px' }}
                    className="fp"
                    onChange={() => {}}
                    value={e.fp}
                  >
                    {palettesLabels.map((ele, i) => (
                      <option
                        onChange={() => {}}
                        selected={e.fp === i ? 'selected' : ''}
                        value={i}
                        key={i}
                      >
                        {ele}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    style={{ width: '60px' }}
                    className="fp"
                    min="0"
                    max="50"
                    type="number"
                    onChange={() => {}}
                    value={e.fp || 0}
                  />
                )}
              </div>
            </div>
            <div className="settings-row"></div>
          </div>
        </div>
      ))
  );
};
export default EffectDetails;
