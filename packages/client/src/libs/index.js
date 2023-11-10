import { toRaw } from 'vue'
import { setup } from "../mud/setup";
import mudConfig from '../../../contracts/mud.config';
import { useGlobalStore } from '../hooks/globalStore'

const { setComponents, setSystemCalls, setNetwork, setComponentsData } = useGlobalStore()

setup().then(async (result) => {
  console.log("MUD setup complete", result);
  const {
    components,
    systemCalls,
    network,
  } = result;
  setComponents(toRaw(components))
  setSystemCalls(toRaw(systemCalls))
  setNetwork(toRaw(network))

  components.Counter.update$.subscribe((update) => {
    const [nextValue, prevValue] = update.value;
    console.log("Counter updated", update, { nextValue, prevValue });
    setComponentsData("Counter", nextValue?.value ?? '')
  });

  const { mount: mountDevTools } = await import("@latticexyz/dev-tools");
  mountDevTools({
    config: mudConfig,
    publicClient: result.network.publicClient,
    walletClient: result.network.walletClient,
    latestBlock$: result.network.latestBlock$,
    storedBlockLogs$: result.network.storedBlockLogs$,
    worldAddress: result.network.worldContract.address,
    worldAbi: result.network.worldContract.abi,
    write$: result.network.write$,
    recsWorld: result.network.world,
  });
})