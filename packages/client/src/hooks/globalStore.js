import { reactive } from "vue";

const store = reactive({
  state: {
    counter: 0,
    increment: null,
    components: null,
    systemCalls: null,
    network: null,
  },
});

const setCounter = async (counter) => {
  store.state.counter = counter
};

const setIncrement = async (increment) => {
  store.state.increment = increment
};

const setMud = async (mud) => {
  store.state.mud = mud
}

const setComponents = async (components) => {
  store.state.components = components
}

const setSystemCalls = async (systemCalls) => {
  console.log("setSystemCalls", systemCalls)
  store.state.systemCalls = systemCalls
}

const setNetwork = async (network) => {
  store.state.network = network
}


export const useGlobalStore = () => ({
  store,
  setCounter,
  setIncrement,
  setMud,
  setComponents,
  setSystemCalls,
  setNetwork,
});
