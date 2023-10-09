declare const abi: [
  {
    inputs: [
      {
        internalType: "uint256";
        name: "length";
        type: "uint256";
      },
      {
        internalType: "uint256";
        name: "accessedIndex";
        type: "uint256";
      }
    ];
    name: "Store_IndexOutOfBounds";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "uint256";
        name: "expected";
        type: "uint256";
      },
      {
        internalType: "uint256";
        name: "received";
        type: "uint256";
      }
    ];
    name: "Store_InvalidDynamicDataLength";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "uint256";
        name: "expected";
        type: "uint256";
      },
      {
        internalType: "uint256";
        name: "received";
        type: "uint256";
      }
    ];
    name: "Store_InvalidFieldNamesLength";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "uint256";
        name: "expected";
        type: "uint256";
      },
      {
        internalType: "uint256";
        name: "received";
        type: "uint256";
      }
    ];
    name: "Store_InvalidKeyNamesLength";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "bytes2";
        name: "expected";
        type: "bytes2";
      },
      {
        internalType: "ResourceId";
        name: "resourceId";
        type: "bytes32";
      },
      {
        internalType: "string";
        name: "resourceIdString";
        type: "string";
      }
    ];
    name: "Store_InvalidResourceType";
    type: "error";
  },
  {
    inputs: [
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
        internalType: "uint40";
        name: "fieldLength";
        type: "uint40";
      }
    ];
    name: "Store_InvalidSplice";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "uint256";
        name: "expected";
        type: "uint256";
      },
      {
        internalType: "uint256";
        name: "received";
        type: "uint256";
      }
    ];
    name: "Store_InvalidValueSchemaLength";
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
        internalType: "string";
        name: "tableIdString";
        type: "string";
      }
    ];
    name: "Store_TableAlreadyExists";
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
        internalType: "string";
        name: "tableIdString";
        type: "string";
      }
    ];
    name: "Store_TableNotFound";
    type: "error";
  },
  {
    anonymous: false;
    inputs: [
      {
        indexed: true;
        internalType: "bytes32";
        name: "storeVersion";
        type: "bytes32";
      }
    ];
    name: "HelloStore";
    type: "event";
  },
  {
    anonymous: false;
    inputs: [
      {
        indexed: true;
        internalType: "ResourceId";
        name: "tableId";
        type: "bytes32";
      },
      {
        indexed: false;
        internalType: "bytes32[]";
        name: "keyTuple";
        type: "bytes32[]";
      }
    ];
    name: "Store_DeleteRecord";
    type: "event";
  },
  {
    anonymous: false;
    inputs: [
      {
        indexed: true;
        internalType: "ResourceId";
        name: "tableId";
        type: "bytes32";
      },
      {
        indexed: false;
        internalType: "bytes32[]";
        name: "keyTuple";
        type: "bytes32[]";
      },
      {
        indexed: false;
        internalType: "bytes";
        name: "staticData";
        type: "bytes";
      },
      {
        indexed: false;
        internalType: "PackedCounter";
        name: "encodedLengths";
        type: "bytes32";
      },
      {
        indexed: false;
        internalType: "bytes";
        name: "dynamicData";
        type: "bytes";
      }
    ];
    name: "Store_SetRecord";
    type: "event";
  },
  {
    anonymous: false;
    inputs: [
      {
        indexed: true;
        internalType: "ResourceId";
        name: "tableId";
        type: "bytes32";
      },
      {
        indexed: false;
        internalType: "bytes32[]";
        name: "keyTuple";
        type: "bytes32[]";
      },
      {
        indexed: false;
        internalType: "uint48";
        name: "start";
        type: "uint48";
      },
      {
        indexed: false;
        internalType: "uint40";
        name: "deleteCount";
        type: "uint40";
      },
      {
        indexed: false;
        internalType: "PackedCounter";
        name: "encodedLengths";
        type: "bytes32";
      },
      {
        indexed: false;
        internalType: "bytes";
        name: "data";
        type: "bytes";
      }
    ];
    name: "Store_SpliceDynamicData";
    type: "event";
  },
  {
    anonymous: false;
    inputs: [
      {
        indexed: true;
        internalType: "ResourceId";
        name: "tableId";
        type: "bytes32";
      },
      {
        indexed: false;
        internalType: "bytes32[]";
        name: "keyTuple";
        type: "bytes32[]";
      },
      {
        indexed: false;
        internalType: "uint48";
        name: "start";
        type: "uint48";
      },
      {
        indexed: false;
        internalType: "bytes";
        name: "data";
        type: "bytes";
      }
    ];
    name: "Store_SpliceStaticData";
    type: "event";
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
      }
    ];
    name: "deleteRecord";
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
      }
    ];
    name: "getDynamicField";
    outputs: [
      {
        internalType: "bytes";
        name: "";
        type: "bytes";
      }
    ];
    stateMutability: "view";
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
      }
    ];
    name: "getDynamicFieldLength";
    outputs: [
      {
        internalType: "uint256";
        name: "";
        type: "uint256";
      }
    ];
    stateMutability: "view";
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
        internalType: "uint256";
        name: "start";
        type: "uint256";
      },
      {
        internalType: "uint256";
        name: "end";
        type: "uint256";
      }
    ];
    name: "getDynamicFieldSlice";
    outputs: [
      {
        internalType: "bytes";
        name: "data";
        type: "bytes";
      }
    ];
    stateMutability: "view";
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
        name: "fieldIndex";
        type: "uint8";
      },
      {
        internalType: "FieldLayout";
        name: "fieldLayout";
        type: "bytes32";
      }
    ];
    name: "getField";
    outputs: [
      {
        internalType: "bytes";
        name: "data";
        type: "bytes";
      }
    ];
    stateMutability: "view";
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
        name: "fieldIndex";
        type: "uint8";
      }
    ];
    name: "getField";
    outputs: [
      {
        internalType: "bytes";
        name: "data";
        type: "bytes";
      }
    ];
    stateMutability: "view";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "ResourceId";
        name: "tableId";
        type: "bytes32";
      }
    ];
    name: "getFieldLayout";
    outputs: [
      {
        internalType: "FieldLayout";
        name: "fieldLayout";
        type: "bytes32";
      }
    ];
    stateMutability: "view";
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
        name: "fieldIndex";
        type: "uint8";
      },
      {
        internalType: "FieldLayout";
        name: "fieldLayout";
        type: "bytes32";
      }
    ];
    name: "getFieldLength";
    outputs: [
      {
        internalType: "uint256";
        name: "";
        type: "uint256";
      }
    ];
    stateMutability: "view";
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
        name: "fieldIndex";
        type: "uint8";
      }
    ];
    name: "getFieldLength";
    outputs: [
      {
        internalType: "uint256";
        name: "";
        type: "uint256";
      }
    ];
    stateMutability: "view";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "ResourceId";
        name: "tableId";
        type: "bytes32";
      }
    ];
    name: "getKeySchema";
    outputs: [
      {
        internalType: "Schema";
        name: "keySchema";
        type: "bytes32";
      }
    ];
    stateMutability: "view";
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
    name: "getRecord";
    outputs: [
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
      }
    ];
    stateMutability: "view";
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
      }
    ];
    name: "getRecord";
    outputs: [
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
      }
    ];
    stateMutability: "view";
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
        name: "fieldIndex";
        type: "uint8";
      },
      {
        internalType: "FieldLayout";
        name: "fieldLayout";
        type: "bytes32";
      }
    ];
    name: "getStaticField";
    outputs: [
      {
        internalType: "bytes32";
        name: "";
        type: "bytes32";
      }
    ];
    stateMutability: "view";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "ResourceId";
        name: "tableId";
        type: "bytes32";
      }
    ];
    name: "getValueSchema";
    outputs: [
      {
        internalType: "Schema";
        name: "valueSchema";
        type: "bytes32";
      }
    ];
    stateMutability: "view";
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
        internalType: "uint256";
        name: "byteLengthToPop";
        type: "uint256";
      }
    ];
    name: "popFromDynamicField";
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
        internalType: "bytes";
        name: "dataToPush";
        type: "bytes";
      }
    ];
    name: "pushToDynamicField";
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
        internalType: "contract IStoreHook";
        name: "hookAddress";
        type: "address";
      },
      {
        internalType: "uint8";
        name: "enabledHooksBitmap";
        type: "uint8";
      }
    ];
    name: "registerStoreHook";
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
        internalType: "FieldLayout";
        name: "fieldLayout";
        type: "bytes32";
      },
      {
        internalType: "Schema";
        name: "keySchema";
        type: "bytes32";
      },
      {
        internalType: "Schema";
        name: "valueSchema";
        type: "bytes32";
      },
      {
        internalType: "string[]";
        name: "keyNames";
        type: "string[]";
      },
      {
        internalType: "string[]";
        name: "fieldNames";
        type: "string[]";
      }
    ];
    name: "registerTable";
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
        internalType: "bytes";
        name: "data";
        type: "bytes";
      }
    ];
    name: "setDynamicField";
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
        name: "fieldIndex";
        type: "uint8";
      },
      {
        internalType: "bytes";
        name: "data";
        type: "bytes";
      }
    ];
    name: "setField";
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
        name: "fieldIndex";
        type: "uint8";
      },
      {
        internalType: "bytes";
        name: "data";
        type: "bytes";
      },
      {
        internalType: "FieldLayout";
        name: "fieldLayout";
        type: "bytes32";
      }
    ];
    name: "setField";
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
      }
    ];
    name: "setRecord";
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
        name: "fieldIndex";
        type: "uint8";
      },
      {
        internalType: "bytes";
        name: "data";
        type: "bytes";
      },
      {
        internalType: "FieldLayout";
        name: "fieldLayout";
        type: "bytes32";
      }
    ];
    name: "setStaticField";
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
        internalType: "bytes";
        name: "data";
        type: "bytes";
      }
    ];
    name: "spliceDynamicData";
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
    name: "spliceStaticData";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  },
  {
    inputs: [];
    name: "storeVersion";
    outputs: [
      {
        internalType: "bytes32";
        name: "version";
        type: "bytes32";
      }
    ];
    stateMutability: "view";
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
        internalType: "contract IStoreHook";
        name: "hookAddress";
        type: "address";
      }
    ];
    name: "unregisterStoreHook";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  }
];
export default abi;
