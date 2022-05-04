export enum ACTIONS_TYPE {
  INCREMENT = "INCREMENT",
  RESET_COUNTER = "RESET-COUNTER",
  SET_VALUES = "SET-VALUES",
}

type IncrementACType = {
  type: typeof ACTIONS_TYPE.INCREMENT;
};

export const incrementAC = (): IncrementACType => ({
  type: ACTIONS_TYPE.INCREMENT,
});

type ResetCounterACType = {
  type: typeof ACTIONS_TYPE.RESET_COUNTER;
  payload: number;
};

export const resetCounterAC = (startValue: number): ResetCounterACType => ({
  type: ACTIONS_TYPE.RESET_COUNTER,
  payload: startValue,
});

type SetValuesACType = {
  type: typeof ACTIONS_TYPE.SET_VALUES;
  payload: {
    startValue: number;
    maxValue: number;
  };
};

export const setValuesAC = (
  startValue: number,
  maxValue: number
): SetValuesACType => ({
  type: ACTIONS_TYPE.SET_VALUES,
  payload: {
    startValue: startValue,
    maxValue: maxValue,
  },
});

export type CounterActionsType =
  | IncrementACType
  | ResetCounterACType
  | SetValuesACType;
// | SetStartValueACType
// | SetMaxValueACType;
