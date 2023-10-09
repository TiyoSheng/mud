import { setup } from "./mud/setup";
import mudConfig from "contracts/mud.config";
import { createApp } from 'vue'
import App from './App.vue'
import { useGlobalStore } from './hooks/globalStore'

const { setCounter, setIncrement } = useGlobalStore()

setup().then(async (result) => {
  console.log("setup result", result);
  result.components.Counter.update$.subscribe((update) => {
    const [nextValue, prevValue] = update.value;
    console.log("Counter updated", update, { nextValue, prevValue });
    setCounter(nextValue?.value ?? "unset")
  });
  const incrementFun = async () => {
    await result.systemCalls.increment();
  };
  setIncrement(incrementFun)

  if (import.meta.env.DEV) {
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
  }
})

createApp(App).mount('#app')

// Components expose a stream that triggers when the component is updated.
// components.Counter.update$.subscribe((update) => {
//   const [nextValue, prevValue] = update.value;
//   console.log("Counter updated", update, { nextValue, prevValue });
//   document.getElementById("counter")!.innerHTML = String(nextValue?.value ?? "unset");
// });

// // Just for demonstration purposes: we create a global function that can be
// // called to invoke the Increment system contract via the world. (See IncrementSystem.sol.)
// (window as any).increment = async () => {
//   console.log("new counter value:", await increment());
// };

// // https://vitejs.dev/guide/env-and-mode.html
