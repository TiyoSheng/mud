/*
 * The supported chains.
 * By default, there are only two chains here:
 *
 * - mudFoundry, the chain running on anvil that pnpm dev
 *   starts by default. It is similar to the viem anvil chain
 *   (see https://viem.sh/docs/clients/test.html), but with the
 *   basefee set to zero to avoid transaction fees.
 * - latticeTestnet, our public test network.
 *
 */

import { MUDChain, latticeTestnet, mudFoundry } from "@latticexyz/common/chains";

/*
 * See https://mud.dev/tutorials/minimal/deploy#run-the-user-interface
 * for instructions on how to add networks.
 */

const optimismGoerli = {
  id: 420,
  name: "Optimism Goerli",
  chain: "goerli",
  rpc: "https://goerli.optimism.io",
  network: "optimism-goerli",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://opt-goerli.g.alchemy.com/v2/bce2VN0gO5fwujxkK1p9hR6W2sQR8smT"],
      webSocket: ["wss://opt-goerli.g.alchemy.com/v2/bce2VN0gO5fwujxkK1p9hR6W2sQR8smT"],
    },
    public: {
      http: ["https://opt-goerli.g.alchemy.com/v2/bce2VN0gO5fwujxkK1p9hR6W2sQR8smT"],
      webSocket: ["wss://opt-goerli.g.alchemy.com/v2/bce2VN0gO5fwujxkK1p9hR6W2sQR8smT"],
    },
  },
  blockExplorers: {
    default: {
      name: "Optimistic Etherscan",
      url: "https://goerli-optimistic.etherscan.io",
    }
  },
  faucetUrl: "https://gateway.optimism.io",
}

export const supportedChains: MUDChain[] = [mudFoundry, latticeTestnet, optimismGoerli];
