declare const abi: [
  {
    inputs: [
      {
        internalType: "address";
        name: "msgSender";
        type: "address";
      },
      {
        internalType: "ResourceId";
        name: "systemId";
        type: "bytes32";
      },
      {
        internalType: "bytes";
        name: "callData";
        type: "bytes";
      }
    ];
    name: "onAfterCallSystem";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "address";
        name: "msgSender";
        type: "address";
      },
      {
        internalType: "ResourceId";
        name: "systemId";
        type: "bytes32";
      },
      {
        internalType: "bytes";
        name: "callData";
        type: "bytes";
      }
    ];
    name: "onBeforeCallSystem";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "bytes4";
        name: "interfaceID";
        type: "bytes4";
      }
    ];
    name: "supportsInterface";
    outputs: [
      {
        internalType: "bool";
        name: "";
        type: "bool";
      }
    ];
    stateMutability: "view";
    type: "function";
  }
];
export default abi;
