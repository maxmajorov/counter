import { ACTIONS_TYPE, CounterActionsType } from "../actions/counter-actions";

const initialState = {
  maxValue: 0,
  startValue: 0, //Потом будем брать из localStorage
  counter: 0,
};

export type initialStateType = typeof initialState;

export const counterReducer = (
  state: initialStateType = initialState,
  action: CounterActionsType
): initialStateType => {
  switch (action.type) {
    case ACTIONS_TYPE.SET_VALUES: {
      return {
        ...state,
        startValue: action.payload.startValue,
        maxValue: action.payload.maxValue,
        counter: action.payload.startValue,
      };
    }
    case ACTIONS_TYPE.INCREMENT: {
      const count = state.counter + 1;
      console.log(count);
      return { ...state, counter: count };
    }
    case ACTIONS_TYPE.RESET_COUNTER: {
      return { ...state, counter: action.payload };
    }
    default: {
      return state;
    }
  }
};
