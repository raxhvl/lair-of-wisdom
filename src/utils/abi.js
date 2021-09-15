const abi = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "dragon",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "parent1",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "parent2",
        type: "address",
      },
    ],
    name: "DragonBirth",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "egg", type: "address" },
      {
        indexed: true,
        internalType: "address",
        name: "parent1",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "parent2",
        type: "address",
      },
    ],
    name: "EggBirth",
    type: "event",
  },
  {
    inputs: [],
    name: "allDragons",
    outputs: [
      { internalType: "contract Dragon[]", name: "", type: "address[]" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "allEggs",
    outputs: [{ internalType: "contract Egg[]", name: "", type: "address[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address[2]", name: "parents", type: "address[2]" },
      { internalType: "string", name: "name", type: "string" },
    ],
    name: "fileDragonCertificate",
    outputs: [
      { internalType: "contract Dragon", name: "dragon", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address[2]", name: "parents", type: "address[2]" },
      { internalType: "string", name: "name", type: "string" },
    ],
    name: "fileEggCertificate",
    outputs: [{ internalType: "contract Egg", name: "egg", type: "address" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "contract Dragon", name: "", type: "address" }],
    name: "isDragon",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "contract Egg", name: "", type: "address" }],
    name: "isEgg",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
];
export default abi;
