import { reactive } from "vue";

const store = reactive({
  components: null,
  systemCalls: null,
  network: null,
  state: {
    Counter: null
  }
});

const setComponents = async (components) => {
  store.components = components
}

const setSystemCalls = async (systemCalls) => {
  store.systemCalls = systemCalls
}

const setNetwork = async (network) => {
  store.state.network = network
}

const setComponentsData = async (components, componentsData) => {
  store.state[components] = componentsData
  console.log(store.state)
}

export const useGlobalStore = () => ({
  store,
  setComponents,
  setSystemCalls,
  setNetwork,
  setComponentsData
});
