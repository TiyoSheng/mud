import { reactive } from "vue";

const store = reactive({
  state: {
    counter: 0,
    increment: null
  },
});

const setCounter = async (counter) => {
  store.state.counter = counter
};

const setIncrement = async (increment) => {
  store.state.increment = increment
};


export const useGlobalStore = () => ({
  store,
  setCounter,
  setIncrement
});
