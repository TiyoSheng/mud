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
  }
];
export default abi;
