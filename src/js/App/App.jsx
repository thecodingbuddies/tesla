import React from 'react';

import Logo from '../../images/logo.svg';

import Bulb from '../components/Bulb';
import Battery from '../components/Battery';
import LightningBall from '../components/LightningBall';
import UpgradeGroup from '../components/UpgradeGroup';
import Upgrade from '../components/Upgrade';

import useReducer from '../reducers';

import { actions as batteryActions } from '../reducers/Battery';
import { upgrades as batteryUpgrades } from '../reducers/Battery/upgrades';

import { actions as mouseActions } from '../reducers/Mouse';
import { upgrades as mouseUpgrades } from '../reducers/Mouse/upgrades';

const App = () => {
  const [state, dispatch] = useReducer();

  return (
    <div className="Game">
      <Logo className="Game-logo" />
      <div className="Game-mainContent">
        <Bulb
          timeToRepair={state.mouse.timeToRepair}
          breakInterval={state.mouse.breakInterval}
          canBreak={state.mouse.canBreak}
          onClick={() => {
            const chargeToAdd = state.mouse.multipliers.reduce((acc, curr) => {
              return acc * curr;
            }, state.mouse.chargePerClick);
            const freeSpace = state.battery.capacity - state.battery.charge;
            if (freeSpace > chargeToAdd) {
              dispatch(batteryActions.ADD_CHARGE(chargeToAdd));
            } else if (freeSpace === 0) {
              dispatch(batteryActions.ADD_CHARGE(0));
            } else {
              dispatch(batteryActions.ADD_CHARGE(freeSpace));
            }
          }}
        />
        <Battery
          charge={state.battery.charge}
          capacity={state.battery.capacity}
        />
        <LightningBall
          onClick={() => {
            dispatch(batteryActions.ADD_CHARGE(1000));
          }}
        />
      </div>
      <div className="Game-sidebar">
        <h2>Upgrades</h2>
        <UpgradeGroup title="Battery">
          {batteryUpgrades.map((upgrade) => {
            return (
              <Upgrade
                cost={upgrade.cost}
                name={upgrade.name}
                onBuy={() => {
                  dispatch(batteryActions.APPLY_UPGRADE(upgrade.action));
                }}
              />
            );
          })}
        </UpgradeGroup>
        <UpgradeGroup title="Mäuse">
          {mouseUpgrades.map((upgrade) => {
            return (
              <Upgrade
                cost={upgrade.cost}
                name={upgrade.name}
                onBuy={() => {
                  dispatch(mouseActions.APPLY_UPGRADE(upgrade.action));
                }}
              />
            );
          })}
        </UpgradeGroup>
        <UpgradeGroup title="Hamsterrad">
          <Upgrade cost={1200} name="Aus Holz" />
          <Upgrade cost={1600} name="Aus Plastik" />
        </UpgradeGroup>
        <h2>Generators</h2>
      </div>
    </div>
  );
};

export default App;
