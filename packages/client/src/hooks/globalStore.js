import { reactive } from "vue";

const store = reactive({
  components: null,
  systemCalls: null,
  network: null,
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

export const useGlobalStore = () => ({
  store,
  setComponents,
  setSystemCalls,
  setNetwork,
});
