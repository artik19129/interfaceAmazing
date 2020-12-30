import { CharacterLicences, STATES, TYPES } from '../interfaces/licenses.interface';

export const characterLicences: CharacterLicences = {
  [TYPES.VEHICLES_B]: {
    id: 1,
    cancelReason: null,
    nextTryAt: null,
    state: STATES.EXISTS,
    stateChangedAt: '2020-12-26T22:16:42.481Z',
    type: TYPES.VEHICLES_B,
  },
  [TYPES.VEHICLES_D]: {
    id: 1,
    cancelReason: 'Нарушение правил ПДД',
    nextTryAt: '2020-12-26T22:16:42.481Z',
    state: STATES.CANCELED,
    stateChangedAt: '2020-12-26T22:16:42.481Z',
    type: TYPES.VEHICLES_D,
  },
  [TYPES.VEHICLES_M]: null,
  [TYPES.VEHICLES_FLY]: {
    id: 1,
    cancelReason: 'Нарушение правил ПДД',
    nextTryAt: '2020-12-26T22:16:42.481Z',
    state: STATES.CANCELED,
    stateChangedAt: '2020-12-26T22:16:42.481Z',
    type: TYPES.VEHICLES_FLY,
  },
  [TYPES.VEHICLES_BOATS]: {
    id: 1,
    cancelReason: null,
    nextTryAt: null,
    state: STATES.EXISTS,
    stateChangedAt: '2020-12-26T22:16:42.481Z',
    type: TYPES.VEHICLES_BOATS,
  },
  [TYPES.WEAPONS]: {
    id: 1,
    cancelReason: 'Нарушение правил ПДД',
    nextTryAt: '2020-12-26T22:16:42.481Z',
    state: STATES.CANCELED,
    stateChangedAt: '2020-12-26T22:16:42.481Z',
    type: TYPES.WEAPONS,
  },
};
