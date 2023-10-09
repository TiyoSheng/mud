declare const abi: [
  {
    inputs: [];
    name: "StoreHook_NotImplemented";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "ResourceId";
        name: "tableId";
        type: "bytes32";
      },
      {
        internalType: "bytes32[]";
        name: "keyTuple";
        type: "bytes32[]";
      },
      {
        internalType: "FieldLayout";
        name: "fieldLayout";
        type: "bytes32";
      }
    ];
    name: "onAfterDeleteRecord";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "ResourceId";
        name: "tableId";
        type: "bytes32";
      },
      {
        internalType: "bytes32[]";
        name: "keyTuple";
        type: "bytes32[]";
      },
      {
        internalType: "bytes";
        name: "staticData";
        type: "bytes";
      },
      {
        internalType: "PackedCounter";
        name: "encodedLengths";
        type: "bytes32";
      },
      {
        internalType: "bytes";
        name: "dynamicData";
        type: "bytes";
      },
      {
        internalType: "FieldLayout";
        name: "fieldLayout";
        type: "bytes32";
      }
    ];
    name: "onAfterSetRecord";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "ResourceId";
        name: "tableId";
        type: "bytes32";
      },
      {
        internalType: "bytes32[]";
        name: "keyTuple";
        type: "bytes32[]";
      },
      {
        internalType: "uint8";
        name: "dynamicFieldIndex";
        type: "uint8";
      },
      {
        internalType: "uint40";
        name: "startWithinField";
        type: "uint40";
      },
      {
        internalType: "uint40";
        name: "deleteCount";
        type: "uint40";
      },
      {
        internalType: "PackedCounter";
        name: "encodedLengths";
        type: "bytes32";
      },
      {
        internalType: "bytes";
        name: "data";
        type: "bytes";
      }
    ];
    name: "onAfterSpliceDynamicData";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "ResourceId";
        name: "tableId";
        type: "bytes32";
      },
      {
        internalType: "bytes32[]";
        name: "keyTuple";
        type: "bytes32[]";
      },
      {
        internalType: "uint48";
        name: "start";
        type: "uint48";
      },
      {
        internalType: "bytes";
        name: "data";
        type: "bytes";
      }
    ];
    name: "onAfterSpliceStaticData";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "ResourceId";
        name: "tableId";
        type: "bytes32";
      },
      {
        internalType: "bytes32[]";
        name: "keyTuple";
        type: "bytes32[]";
      },
      {
        internalType: "FieldLayout";
        name: "fieldLayout";
        type: "bytes32";
      }
    ];
    name: "onBeforeDeleteRecord";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "ResourceId";
        name: "tableId";
        type: "bytes32";
      },
      {
        internalType: "bytes32[]";
        name: "keyTuple";
        type: "bytes32[]";
      },
      {
        internalType: "bytes";
        name: "staticData";
        type: "bytes";
      },
      {
        internalType: "PackedCounter";
        name: "encodedLengths";
        type: "bytes32";
      },
      {
        internalType: "bytes";
        name: "dynamicData";
        type: "bytes";
      },
      {
        internalType: "FieldLayout";
        name: "fieldLayout";
        type: "bytes32";
      }
    ];
    name: "onBeforeSetRecord";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "ResourceId";
        name: "tableId";
        type: "bytes32";
      },
      {
        internalType: "bytes32[]";
        name: "keyTuple";
        type: "bytes32[]";
      },
      {
        internalType: "uint8";
        name: "dynamicFieldIndex";
        type: "uint8";
      },
      {
        internalType: "uint40";
        name: "startWithinField";
        type: "uint40";
      },
      {
        internalType: "uint40";
        name: "deleteCount";
        type: "uint40";
      },
      {
        internalType: "PackedCounter";
        name: "encodedLengths";
        type: "bytes32";
      },
      {
        internalType: "bytes";
        name: "data";
        type: "bytes";
      }
    ];
    name: "onBeforeSpliceDynamicData";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "ResourceId";
        name: "tableId";
        type: "bytes32";
      },
      {
        internalType: "bytes32[]";
        name: "keyTuple";
        type: "bytes32[]";
      },
      {
        internalType: "uint48";
        name: "start";
        type: "uint48";
      },
      {
        internalType: "bytes";
        name: "data";
        type: "bytes";
      }
    ];
    name: "onBeforeSpliceStaticData";
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
