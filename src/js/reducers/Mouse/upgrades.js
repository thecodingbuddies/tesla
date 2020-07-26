export default {
  chargePerClick: 0.1,
  breakInterval: {
    min: 60000,
    max: 120000,
  },
  timeToRepair: 10000,
};

export const upgrades = [
  {
    name: 'Laser Mouse',
    description:
      'You generate more charge per click and your mouse breaks less often',
    cost: 0,
    action: (state) => {
      return {
        ...state,
        chargePerClick: 0.2,
        breakInterval: {
          min: 300000,
          max: 600000,
        },
        timeToRepair: 20000,
      };
    },
  },
  {
    name: 'Gaming Mouse',
    description:
      'You generate more charge per click and your mouse breaks less often',
    cost: 0,
    action: (state) => {
      return {
        ...state,
        chargePerClick: 0.8,
        breakInterval: {
          min: 900000,
          max: 1200000,
        },
        timeToRepair: 30000,
      };
    },
  },
  {
    name: 'Autoclicker',
    description:
      'You generate more charge per click and your mouse breaks less often',
    cost: 0,
    action: (state) => {
      return {
        ...state,
        chargePerClick: 6.4,
        breakInterval: {
          min: 1200000,
          max: 1800000,
        },
        timeToRepair: 10000,
      };
    },
  },
  {
    name: 'Akimbo',
    description: 'Multiplyier: 2x',
    cost: 0,
    action: (state) => {
      return {
        multipliers: [...state.multipliers, 2],
      };
    },
  },
  {
    name: 'Trained Fingers',
    description: 'Multiplyier: 2x',
    cost: 0,
    action: (state) => {
      return {
        multipliers: [...state.multipliers, 2],
      };
    },
  },
  {
    name: 'Armrest',
    description: "Your mouse can't break anymore",
    cost: 0,
    action: (_state) => {
      return {
        canBreak: false,
      };
    },
  },
];
