export const DB_NAME = "nftvrbackend1";
export const MarketAddress = "0xbEeCB9EF39c565d4683d50d35420EFA4e27e002d";

export const NFT_MARKETPLACE = {
    "_format": "hh-sol-artifact-1",
    "contractName": "NftMarketPlace",
    "sourceName": "contracts/NftMarketPlace.sol",
    "abi": [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "ERC721IncorrectOwner",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "ERC721InsufficientApproval",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "approver",
                    "type": "address"
                }
            ],
            "name": "ERC721InvalidApprover",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                }
            ],
            "name": "ERC721InvalidOperator",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "ERC721InvalidOwner",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                }
            ],
            "name": "ERC721InvalidReceiver",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                }
            ],
            "name": "ERC721InvalidSender",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "ERC721NonexistentToken",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "NftMarketPlace__ExchangeFailed",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "NftMarketPlace__InsufficientAmount",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "NftMarketPlace__InsufficientAmountSent",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "NftMarketPlace__InsufficientPriceSet",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "NftMarketPlace__NotForSale",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "NftMarketPlace__NotOwner",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "NftMarketPlace__OwnerCantBuy",
            "type": "error"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "approved",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "ApprovalForAll",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_fromTokenId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_toTokenId",
                    "type": "uint256"
                }
            ],
            "name": "BatchMetadataUpdate",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "creator",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "approvedOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "price",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "sold",
                    "type": "bool"
                }
            ],
            "name": "MarketItemCreated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "name": "MetadataUpdate",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "price",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "tokenUri",
                    "type": "string"
                }
            ],
            "name": "createNft",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "exchangeNft",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "getApproved",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getListingPrice",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getNumberOfSoldNfts",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                }
            ],
            "name": "isApprovedForAll",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "listedItemsForSale",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "seller",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "price",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bool",
                            "name": "sold",
                            "type": "bool"
                        }
                    ],
                    "internalType": "struct NftMarketPlace.MarketItem[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "myListedNfts",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "seller",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "price",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bool",
                            "name": "sold",
                            "type": "bool"
                        }
                    ],
                    "internalType": "struct NftMarketPlace.MarketItem[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "myNftsPurchased",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "seller",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "price",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bool",
                            "name": "sold",
                            "type": "bool"
                        }
                    ],
                    "internalType": "struct NftMarketPlace.MarketItem[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "ownerOf",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "price",
                    "type": "uint256"
                }
            ],
            "name": "relistNft",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "removeFromListing",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "setApprovalForAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "price",
                    "type": "uint256"
                }
            ],
            "name": "setListingPrice",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes4",
                    "name": "interfaceId",
                    "type": "bytes4"
                }
            ],
            "name": "supportsInterface",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "tokenURI",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    "bytecode": "0x60a06040523480156200001157600080fd5b506040518060400160405280600d81526020017f56522041727420546f6b656e73000000000000000000000000000000000000008152506040518060400160405280600481526020017f454e4d410000000000000000000000000000000000000000000000000000000081525081600090816200008f919062000376565b508060019081620000a1919062000376565b5050503373ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250506001600781905550600060088190555066470de4df8200006009819055506200045d565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200017e57607f821691505b60208210810362000194576200019362000136565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620001fe7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620001bf565b6200020a8683620001bf565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600062000257620002516200024b8462000222565b6200022c565b62000222565b9050919050565b6000819050919050565b620002738362000236565b6200028b62000282826200025e565b848454620001cc565b825550505050565b600090565b620002a262000293565b620002af81848462000268565b505050565b5b81811015620002d757620002cb60008262000298565b600181019050620002b5565b5050565b601f8211156200032657620002f0816200019a565b620002fb84620001af565b810160208510156200030b578190505b620003236200031a85620001af565b830182620002b4565b50505b505050565b600082821c905092915050565b60006200034b600019846008026200032b565b1980831691505092915050565b600062000366838362000338565b9150826002028217905092915050565b6200038182620000fc565b67ffffffffffffffff8111156200039d576200039c62000107565b5b620003a9825462000165565b620003b6828285620002db565b600060209050601f831160018114620003ee5760008415620003d9578287015190505b620003e5858262000358565b86555062000455565b601f198416620003fe866200019a565b60005b82811015620004285784890151825560018201915060208501945060208101905062000401565b8683101562000448578489015162000444601f89168262000338565b8355505b6001600288020188555050505b505050505050565b608051613f246200048760003960008181610a0101528181610b9c0152611cc90152613f246000f3fe6080604052600436106101405760003560e01c806382862abe116100b6578063c87b56dd1161006f578063c87b56dd1461045a578063df73106614610497578063e13d899c146104c7578063e985e9c5146104f2578063ebddf9d71461052f578063edf7cf9b1461054b57610140565b806382862abe1461035c57806395d89b4114610387578063a22cb465146103b2578063a4ee9afd146103db578063b88d4fde14610406578063b9affbce1461042f57610140565b806323b872dd1161010857806323b872dd1461023e57806342842e0e146102675780635b9d252d146102905780636352211e146102b957806370a08231146102f65780637c726b691461033357610140565b806301ffc9a71461014557806306fdde0314610182578063081812fc146101ad578063095ea7b3146101ea57806312e8558514610213575b600080fd5b34801561015157600080fd5b5061016c600480360381019061016791906130e1565b61057b565b6040516101799190613129565b60405180910390f35b34801561018e57600080fd5b506101976105dc565b6040516101a491906131d4565b60405180910390f35b3480156101b957600080fd5b506101d460048036038101906101cf919061322c565b61066e565b6040516101e1919061329a565b60405180910390f35b3480156101f657600080fd5b50610211600480360381019061020c91906132e1565b61068a565b005b34801561021f57600080fd5b506102286106a0565b6040516102359190613330565b60405180910390f35b34801561024a57600080fd5b506102656004803603810190610260919061334b565b6106aa565b005b34801561027357600080fd5b5061028e6004803603810190610289919061334b565b6107ac565b005b34801561029c57600080fd5b506102b760048036038101906102b2919061322c565b6107cc565b005b3480156102c557600080fd5b506102e060048036038101906102db919061322c565b610ace565b6040516102ed919061329a565b60405180910390f35b34801561030257600080fd5b5061031d6004803603810190610318919061339e565b610ae0565b60405161032a9190613330565b60405180910390f35b34801561033f57600080fd5b5061035a6004803603810190610355919061322c565b610b9a565b005b34801561036857600080fd5b50610371610c63565b60405161037e919061350f565b60405180910390f35b34801561039357600080fd5b5061039c610f77565b6040516103a991906131d4565b60405180910390f35b3480156103be57600080fd5b506103d960048036038101906103d4919061355d565b611009565b005b3480156103e757600080fd5b506103f061101f565b6040516103fd9190613330565b60405180910390f35b34801561041257600080fd5b5061042d600480360381019061042891906136d2565b611029565b005b34801561043b57600080fd5b50610444611046565b604051610451919061350f565b60405180910390f35b34801561046657600080fd5b50610481600480360381019061047c919061322c565b6112ad565b60405161048e91906131d4565b60405180910390f35b6104b160048036038101906104ac91906137f6565b6113c0565b6040516104be9190613330565b60405180910390f35b3480156104d357600080fd5b506104dc6115c8565b6040516104e9919061350f565b60405180910390f35b3480156104fe57600080fd5b5061051960048036038101906105149190613852565b6118dc565b6040516105269190613129565b60405180910390f35b6105496004803603810190610544919061322c565b611970565b005b61056560048036038101906105609190613892565b611e42565b6040516105729190613330565b60405180910390f35b6000634906490660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806105d557506105d482611f16565b5b9050919050565b6060600080546105eb90613901565b80601f016020809104026020016040519081016040528092919081815260200182805461061790613901565b80156106645780601f1061063957610100808354040283529160200191610664565b820191906000526020600020905b81548152906001019060200180831161064757829003601f168201915b5050505050905090565b600061067982611ff8565b5061068382612080565b9050919050565b61069c82826106976120bd565b6120c5565b5050565b6000600954905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361071c5760006040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401610713919061329a565b60405180910390fd5b6000610730838361072b6120bd565b6120d7565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146107a6578382826040517f64283d7b00000000000000000000000000000000000000000000000000000000815260040161079d93929190613932565b60405180910390fd5b50505050565b6107c783838360405180602001604052806000815250611029565b505050565b3373ffffffffffffffffffffffffffffffffffffffff166107ec82610ace565b73ffffffffffffffffffffffffffffffffffffffff1614610839576040517f49731c3b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000600a60008381526020019081526020016000206040518060a0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600382015481526020016004820160009054906101000a900460ff1615151515815250509050600115158160800151151503610978576040517f27a8bf7700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600a600084815260200190815260200160002060040160006101000a81548160ff0219169083151502179055506000600a600084815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16600954604051610a459061399a565b60006040518083038185875af1925050503d8060008114610a82576040519150601f19603f3d011682016040523d82523d6000602084013e610a87565b606091505b505090506000151581151503610ac9576040517f2e5ccf2200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050565b6000610ad982611ff8565b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610b535760006040517f89c62b64000000000000000000000000000000000000000000000000000000008152600401610b4a919061329a565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610c1f576040517f49731c3b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008111610c59576040517f4a9d022e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060098190555050565b6060600080600190505b600754811015610d315760001515600a600083815260200190815260200160002060040160009054906101000a900460ff161515148015610d0f57503373ffffffffffffffffffffffffffffffffffffffff16600a600083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b15610d2457600182610d2191906139de565b91505b8080600101915050610c6d565b506000808267ffffffffffffffff811115610d4f57610d4e6135a7565b5b604051908082528060200260200182016040528015610d8857816020015b610d75613018565b815260200190600190039081610d6d5790505b5090506000600190505b600754811015610f6d5760001515600a600083815260200190815260200160002060040160009054906101000a900460ff161515148015610e3457503373ffffffffffffffffffffffffffffffffffffffff16600a600083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b15610f6057600a60008281526020019081526020016000206040518060a0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600382015481526020016004820160009054906101000a900460ff161515151581525050828481518110610f4557610f44613a12565b5b6020026020010181905250600183610f5d91906139de565b92505b8080600101915050610d92565b5080935050505090565b606060018054610f8690613901565b80601f0160208091040260200160405190810160405280929190818152602001828054610fb290613901565b8015610fff5780601f10610fd457610100808354040283529160200191610fff565b820191906000526020600020905b815481529060010190602001808311610fe257829003601f168201915b5050505050905090565b61101b6110146120bd565b83836122f1565b5050565b6000600854905090565b6110348484846106aa565b61104084848484612460565b50505050565b60606000600854600160075461105c9190613a41565b6110669190613a41565b905060008167ffffffffffffffff811115611084576110836135a7565b5b6040519080825280602002602001820160405280156110bd57816020015b6110aa613018565b8152602001906001900390816110a25790505b509050600080600190505b6007548110156112a35760001515600a600083815260200190815260200160002060040160009054906101000a900460ff16151514801561116a57503073ffffffffffffffffffffffffffffffffffffffff16600a600083815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b1561129657600a60008281526020019081526020016000206040518060a0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600382015481526020016004820160009054906101000a900460ff16151515158152505083838151811061127b5761127a613a12565b5b602002602001018190525060018261129391906139de565b91505b80806001019150506110c8565b5081935050505090565b60606112b882611ff8565b5060006006600084815260200190815260200160002080546112d990613901565b80601f016020809104026020016040519081016040528092919081815260200182805461130590613901565b80156113525780601f1061132757610100808354040283529160200191611352565b820191906000526020600020905b81548152906001019060200180831161133557829003601f168201915b505050505090506000611363612617565b905060008151036113785781925050506113bb565b6000825111156113ad578082604051602001611395929190613ab1565b604051602081830303815290604052925050506113bb565b6113b68461262e565b925050505b919050565b60006009543410156113fe576040517f4a9d022e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008311611438576040517f329c1f1e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61144433600754612697565b611450600754836126b5565b6040518060a0016040528060075481526020013373ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200184815260200160011515815250600a600060075481526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816003015560808201518160040160006101000a81548160ff021916908315150217905550905050600160075461159291906139de565b6007819055506115b160016007546115aa9190613a41565b8433612711565b60016007546115c09190613a41565b905092915050565b6060600080600190505b6007548110156116965760011515600a600083815260200190815260200160002060040160009054906101000a900460ff16151514801561167457503373ffffffffffffffffffffffffffffffffffffffff16600a600083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b156116895760018261168691906139de565b91505b80806001019150506115d2565b506000808267ffffffffffffffff8111156116b4576116b36135a7565b5b6040519080825280602002602001820160405280156116ed57816020015b6116da613018565b8152602001906001900390816116d25790505b5090506000600190505b6007548110156118d25760011515600a600083815260200190815260200160002060040160009054906101000a900460ff16151514801561179957503373ffffffffffffffffffffffffffffffffffffffff16600a600083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b156118c557600a60008281526020019081526020016000206040518060a0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600382015481526020016004820160009054906101000a900460ff1615151515815250508284815181106118aa576118a9613a12565b5b60200260200101819052506001836118c291906139de565b92505b80806001019150506116f7565b5080935050505090565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b3373ffffffffffffffffffffffffffffffffffffffff16611990826128f1565b73ffffffffffffffffffffffffffffffffffffffff16036119dd576040517ff840540400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000600a60008381526020019081526020016000206040518060a0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600382015481526020016004820160009054906101000a900460ff1615151515815250509050600115158160800151151503611b1c576040517f27a8bf7700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060600151341015611b5a576040517f3015947c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600a600084815260200190815260200160002060040160006101000a81548160ff0219169083151502179055503073ffffffffffffffffffffffffffffffffffffffff166342842e0e826020015133856040518463ffffffff1660e01b8152600401611bca93929190613ad5565b600060405180830381600087803b158015611be457600080fd5b505af1158015611bf8573d6000803e3d6000fd5b505050506001600854611c0b91906139de565b60088190555060008160200151905033600a600085815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600a600085815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16600954604051611d0d9061399a565b60006040518083038185875af1925050503d8060008114611d4a576040519150601f19603f3d011682016040523d82523d6000602084013e611d4f565b606091505b505090506000151581151503611d91576040517f2e5ccf2200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff1634604051611db79061399a565b60006040518083038185875af1925050503d8060008114611df4576040519150601f19603f3d011682016040523d82523d6000602084013e611df9565b606091505b505090506000151581151503611e3b576040517f2e5ccf2200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050505050565b60003373ffffffffffffffffffffffffffffffffffffffff16611e6484610ace565b73ffffffffffffffffffffffffffffffffffffffff1614611eb1576040517f49731c3b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600954341015611eed576040517f4a9d022e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611ef8838333612711565b6001600854611f079190613a41565b60088190555082905092915050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480611fe157507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80611ff15750611ff08261292e565b5b9050919050565b600080612004836128f1565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361207757826040517f7e27328900000000000000000000000000000000000000000000000000000000815260040161206e9190613330565b60405180910390fd5b80915050919050565b60006004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600033905090565b6120d28383836001612998565b505050565b6000806120e3846128f1565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161461212557612124818486612b5d565b5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146121b657612167600085600080612998565b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614612239576001600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b846002600086815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361236257816040517f5b08ba18000000000000000000000000000000000000000000000000000000008152600401612359919061329a565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516124539190613129565b60405180910390a3505050565b60008373ffffffffffffffffffffffffffffffffffffffff163b1115612611578273ffffffffffffffffffffffffffffffffffffffff1663150b7a026124a46120bd565b8685856040518563ffffffff1660e01b81526004016124c69493929190613b61565b6020604051808303816000875af192505050801561250257506040513d601f19601f820116820180604052508101906124ff9190613bc2565b60015b612586573d8060008114612532576040519150601f19603f3d011682016040523d82523d6000602084013e612537565b606091505b50600081510361257e57836040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401612575919061329a565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161461260f57836040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401612606919061329a565b60405180910390fd5b505b50505050565b606060405180602001604052806000815250905090565b606061263982611ff8565b506000612644612617565b90506000815111612664576040518060200160405280600081525061268f565b8061266e84612c21565b60405160200161267f929190613ab1565b6040516020818303038152906040525b915050919050565b6126b1828260405180602001604052806000815250612cef565b5050565b806006600084815260200190815260200160002090816126d59190613d9b565b507ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce7826040516127059190613330565b60405180910390a15050565b6000821161274b576040517f329c1f1e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040518060a001604052808481526020018273ffffffffffffffffffffffffffffffffffffffff1681526020013073ffffffffffffffffffffffffffffffffffffffff16815260200183815260200160001515815250600a60008581526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816003015560808201518160040160006101000a81548160ff021916908315150217905550905050612883308461068a565b813073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fb640004f1d14576d0c209e240cad0410e0d8c0c33a09375861fbadae2588a98d8660006040516128e4929190613e6d565b60405180910390a4505050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b80806129d15750600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b15612b055760006129e184611ff8565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015612a4c57508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b8015612a5f5750612a5d81846118dc565b155b15612aa157826040517fa9fbf51f000000000000000000000000000000000000000000000000000000008152600401612a98919061329a565b60405180910390fd5b8115612b0357838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b836004600085815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b612b68838383612d0b565b612c1c57600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603612bdd57806040517f7e273289000000000000000000000000000000000000000000000000000000008152600401612bd49190613330565b60405180910390fd5b81816040517f177e802f000000000000000000000000000000000000000000000000000000008152600401612c13929190613e96565b60405180910390fd5b505050565b606060006001612c3084612dcc565b01905060008167ffffffffffffffff811115612c4f57612c4e6135a7565b5b6040519080825280601f01601f191660200182016040528015612c815781602001600182028036833780820191505090505b509050600082602001820190505b600115612ce4578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8581612cd857612cd7613ebf565b5b04945060008503612c8f575b819350505050919050565b612cf98383612f1f565b612d066000848484612460565b505050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015612dc357508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480612d845750612d8384846118dc565b5b80612dc257508273ffffffffffffffffffffffffffffffffffffffff16612daa83612080565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310612e2a577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381612e2057612e1f613ebf565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310612e67576d04ee2d6d415b85acef81000000008381612e5d57612e5c613ebf565b5b0492506020810190505b662386f26fc100008310612e9657662386f26fc100008381612e8c57612e8b613ebf565b5b0492506010810190505b6305f5e1008310612ebf576305f5e1008381612eb557612eb4613ebf565b5b0492506008810190505b6127108310612ee4576127108381612eda57612ed9613ebf565b5b0492506004810190505b60648310612f075760648381612efd57612efc613ebf565b5b0492506002810190505b600a8310612f16576001810190505b80915050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612f915760006040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401612f88919061329a565b60405180910390fd5b6000612f9f838360006120d7565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146130135760006040517f73c6ac6e00000000000000000000000000000000000000000000000000000000815260040161300a919061329a565b60405180910390fd5b505050565b6040518060a0016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000151581525090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6130be81613089565b81146130c957600080fd5b50565b6000813590506130db816130b5565b92915050565b6000602082840312156130f7576130f661307f565b5b6000613105848285016130cc565b91505092915050565b60008115159050919050565b6131238161310e565b82525050565b600060208201905061313e600083018461311a565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561317e578082015181840152602081019050613163565b60008484015250505050565b6000601f19601f8301169050919050565b60006131a682613144565b6131b0818561314f565b93506131c0818560208601613160565b6131c98161318a565b840191505092915050565b600060208201905081810360008301526131ee818461319b565b905092915050565b6000819050919050565b613209816131f6565b811461321457600080fd5b50565b60008135905061322681613200565b92915050565b6000602082840312156132425761324161307f565b5b600061325084828501613217565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061328482613259565b9050919050565b61329481613279565b82525050565b60006020820190506132af600083018461328b565b92915050565b6132be81613279565b81146132c957600080fd5b50565b6000813590506132db816132b5565b92915050565b600080604083850312156132f8576132f761307f565b5b6000613306858286016132cc565b925050602061331785828601613217565b9150509250929050565b61332a816131f6565b82525050565b60006020820190506133456000830184613321565b92915050565b6000806000606084860312156133645761336361307f565b5b6000613372868287016132cc565b9350506020613383868287016132cc565b925050604061339486828701613217565b9150509250925092565b6000602082840312156133b4576133b361307f565b5b60006133c2848285016132cc565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b613400816131f6565b82525050565b61340f81613279565b82525050565b61341e8161310e565b82525050565b60a08201600082015161343a60008501826133f7565b50602082015161344d6020850182613406565b5060408201516134606040850182613406565b50606082015161347360608501826133f7565b5060808201516134866080850182613415565b50505050565b60006134988383613424565b60a08301905092915050565b6000602082019050919050565b60006134bc826133cb565b6134c681856133d6565b93506134d1836133e7565b8060005b838110156135025781516134e9888261348c565b97506134f4836134a4565b9250506001810190506134d5565b5085935050505092915050565b6000602082019050818103600083015261352981846134b1565b905092915050565b61353a8161310e565b811461354557600080fd5b50565b60008135905061355781613531565b92915050565b600080604083850312156135745761357361307f565b5b6000613582858286016132cc565b925050602061359385828601613548565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6135df8261318a565b810181811067ffffffffffffffff821117156135fe576135fd6135a7565b5b80604052505050565b6000613611613075565b905061361d82826135d6565b919050565b600067ffffffffffffffff82111561363d5761363c6135a7565b5b6136468261318a565b9050602081019050919050565b82818337600083830152505050565b600061367561367084613622565b613607565b905082815260208101848484011115613691576136906135a2565b5b61369c848285613653565b509392505050565b600082601f8301126136b9576136b861359d565b5b81356136c9848260208601613662565b91505092915050565b600080600080608085870312156136ec576136eb61307f565b5b60006136fa878288016132cc565b945050602061370b878288016132cc565b935050604061371c87828801613217565b925050606085013567ffffffffffffffff81111561373d5761373c613084565b5b613749878288016136a4565b91505092959194509250565b600067ffffffffffffffff8211156137705761376f6135a7565b5b6137798261318a565b9050602081019050919050565b600061379961379484613755565b613607565b9050828152602081018484840111156137b5576137b46135a2565b5b6137c0848285613653565b509392505050565b600082601f8301126137dd576137dc61359d565b5b81356137ed848260208601613786565b91505092915050565b6000806040838503121561380d5761380c61307f565b5b600061381b85828601613217565b925050602083013567ffffffffffffffff81111561383c5761383b613084565b5b613848858286016137c8565b9150509250929050565b600080604083850312156138695761386861307f565b5b6000613877858286016132cc565b9250506020613888858286016132cc565b9150509250929050565b600080604083850312156138a9576138a861307f565b5b60006138b785828601613217565b92505060206138c885828601613217565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061391957607f821691505b60208210810361392c5761392b6138d2565b5b50919050565b6000606082019050613947600083018661328b565b6139546020830185613321565b613961604083018461328b565b949350505050565b600081905092915050565b50565b6000613984600083613969565b915061398f82613974565b600082019050919050565b60006139a582613977565b9150819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006139e9826131f6565b91506139f4836131f6565b9250828201905080821115613a0c57613a0b6139af565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000613a4c826131f6565b9150613a57836131f6565b9250828203905081811115613a6f57613a6e6139af565b5b92915050565b600081905092915050565b6000613a8b82613144565b613a958185613a75565b9350613aa5818560208601613160565b80840191505092915050565b6000613abd8285613a80565b9150613ac98284613a80565b91508190509392505050565b6000606082019050613aea600083018661328b565b613af7602083018561328b565b613b046040830184613321565b949350505050565b600081519050919050565b600082825260208201905092915050565b6000613b3382613b0c565b613b3d8185613b17565b9350613b4d818560208601613160565b613b568161318a565b840191505092915050565b6000608082019050613b76600083018761328b565b613b83602083018661328b565b613b906040830185613321565b8181036060830152613ba28184613b28565b905095945050505050565b600081519050613bbc816130b5565b92915050565b600060208284031215613bd857613bd761307f565b5b6000613be684828501613bad565b91505092915050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302613c517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82613c14565b613c5b8683613c14565b95508019841693508086168417925050509392505050565b6000819050919050565b6000613c98613c93613c8e846131f6565b613c73565b6131f6565b9050919050565b6000819050919050565b613cb283613c7d565b613cc6613cbe82613c9f565b848454613c21565b825550505050565b600090565b613cdb613cce565b613ce6818484613ca9565b505050565b5b81811015613d0a57613cff600082613cd3565b600181019050613cec565b5050565b601f821115613d4f57613d2081613bef565b613d2984613c04565b81016020851015613d38578190505b613d4c613d4485613c04565b830182613ceb565b50505b505050565b600082821c905092915050565b6000613d7260001984600802613d54565b1980831691505092915050565b6000613d8b8383613d61565b9150826002028217905092915050565b613da482613144565b67ffffffffffffffff811115613dbd57613dbc6135a7565b5b613dc78254613901565b613dd2828285613d0e565b600060209050601f831160018114613e055760008415613df3578287015190505b613dfd8582613d7f565b865550613e65565b601f198416613e1386613bef565b60005b82811015613e3b57848901518255600182019150602085019450602081019050613e16565b86831015613e585784890151613e54601f891682613d61565b8355505b6001600288020188555050505b505050505050565b6000604082019050613e826000830185613321565b613e8f602083018461311a565b9392505050565b6000604082019050613eab600083018561328b565b613eb86020830184613321565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fdfea2646970667358221220b9229fd6beee6e7be04b0029941cc6e841b667ba7ab30e59217e08e84ae2eb7b64736f6c63430008180033",
    "deployedBytecode": "0x6080604052600436106101405760003560e01c806382862abe116100b6578063c87b56dd1161006f578063c87b56dd1461045a578063df73106614610497578063e13d899c146104c7578063e985e9c5146104f2578063ebddf9d71461052f578063edf7cf9b1461054b57610140565b806382862abe1461035c57806395d89b4114610387578063a22cb465146103b2578063a4ee9afd146103db578063b88d4fde14610406578063b9affbce1461042f57610140565b806323b872dd1161010857806323b872dd1461023e57806342842e0e146102675780635b9d252d146102905780636352211e146102b957806370a08231146102f65780637c726b691461033357610140565b806301ffc9a71461014557806306fdde0314610182578063081812fc146101ad578063095ea7b3146101ea57806312e8558514610213575b600080fd5b34801561015157600080fd5b5061016c600480360381019061016791906130e1565b61057b565b6040516101799190613129565b60405180910390f35b34801561018e57600080fd5b506101976105dc565b6040516101a491906131d4565b60405180910390f35b3480156101b957600080fd5b506101d460048036038101906101cf919061322c565b61066e565b6040516101e1919061329a565b60405180910390f35b3480156101f657600080fd5b50610211600480360381019061020c91906132e1565b61068a565b005b34801561021f57600080fd5b506102286106a0565b6040516102359190613330565b60405180910390f35b34801561024a57600080fd5b506102656004803603810190610260919061334b565b6106aa565b005b34801561027357600080fd5b5061028e6004803603810190610289919061334b565b6107ac565b005b34801561029c57600080fd5b506102b760048036038101906102b2919061322c565b6107cc565b005b3480156102c557600080fd5b506102e060048036038101906102db919061322c565b610ace565b6040516102ed919061329a565b60405180910390f35b34801561030257600080fd5b5061031d6004803603810190610318919061339e565b610ae0565b60405161032a9190613330565b60405180910390f35b34801561033f57600080fd5b5061035a6004803603810190610355919061322c565b610b9a565b005b34801561036857600080fd5b50610371610c63565b60405161037e919061350f565b60405180910390f35b34801561039357600080fd5b5061039c610f77565b6040516103a991906131d4565b60405180910390f35b3480156103be57600080fd5b506103d960048036038101906103d4919061355d565b611009565b005b3480156103e757600080fd5b506103f061101f565b6040516103fd9190613330565b60405180910390f35b34801561041257600080fd5b5061042d600480360381019061042891906136d2565b611029565b005b34801561043b57600080fd5b50610444611046565b604051610451919061350f565b60405180910390f35b34801561046657600080fd5b50610481600480360381019061047c919061322c565b6112ad565b60405161048e91906131d4565b60405180910390f35b6104b160048036038101906104ac91906137f6565b6113c0565b6040516104be9190613330565b60405180910390f35b3480156104d357600080fd5b506104dc6115c8565b6040516104e9919061350f565b60405180910390f35b3480156104fe57600080fd5b5061051960048036038101906105149190613852565b6118dc565b6040516105269190613129565b60405180910390f35b6105496004803603810190610544919061322c565b611970565b005b61056560048036038101906105609190613892565b611e42565b6040516105729190613330565b60405180910390f35b6000634906490660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806105d557506105d482611f16565b5b9050919050565b6060600080546105eb90613901565b80601f016020809104026020016040519081016040528092919081815260200182805461061790613901565b80156106645780601f1061063957610100808354040283529160200191610664565b820191906000526020600020905b81548152906001019060200180831161064757829003601f168201915b5050505050905090565b600061067982611ff8565b5061068382612080565b9050919050565b61069c82826106976120bd565b6120c5565b5050565b6000600954905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361071c5760006040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401610713919061329a565b60405180910390fd5b6000610730838361072b6120bd565b6120d7565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146107a6578382826040517f64283d7b00000000000000000000000000000000000000000000000000000000815260040161079d93929190613932565b60405180910390fd5b50505050565b6107c783838360405180602001604052806000815250611029565b505050565b3373ffffffffffffffffffffffffffffffffffffffff166107ec82610ace565b73ffffffffffffffffffffffffffffffffffffffff1614610839576040517f49731c3b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000600a60008381526020019081526020016000206040518060a0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600382015481526020016004820160009054906101000a900460ff1615151515815250509050600115158160800151151503610978576040517f27a8bf7700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600a600084815260200190815260200160002060040160006101000a81548160ff0219169083151502179055506000600a600084815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16600954604051610a459061399a565b60006040518083038185875af1925050503d8060008114610a82576040519150601f19603f3d011682016040523d82523d6000602084013e610a87565b606091505b505090506000151581151503610ac9576040517f2e5ccf2200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050565b6000610ad982611ff8565b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610b535760006040517f89c62b64000000000000000000000000000000000000000000000000000000008152600401610b4a919061329a565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610c1f576040517f49731c3b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008111610c59576040517f4a9d022e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060098190555050565b6060600080600190505b600754811015610d315760001515600a600083815260200190815260200160002060040160009054906101000a900460ff161515148015610d0f57503373ffffffffffffffffffffffffffffffffffffffff16600a600083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b15610d2457600182610d2191906139de565b91505b8080600101915050610c6d565b506000808267ffffffffffffffff811115610d4f57610d4e6135a7565b5b604051908082528060200260200182016040528015610d8857816020015b610d75613018565b815260200190600190039081610d6d5790505b5090506000600190505b600754811015610f6d5760001515600a600083815260200190815260200160002060040160009054906101000a900460ff161515148015610e3457503373ffffffffffffffffffffffffffffffffffffffff16600a600083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b15610f6057600a60008281526020019081526020016000206040518060a0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600382015481526020016004820160009054906101000a900460ff161515151581525050828481518110610f4557610f44613a12565b5b6020026020010181905250600183610f5d91906139de565b92505b8080600101915050610d92565b5080935050505090565b606060018054610f8690613901565b80601f0160208091040260200160405190810160405280929190818152602001828054610fb290613901565b8015610fff5780601f10610fd457610100808354040283529160200191610fff565b820191906000526020600020905b815481529060010190602001808311610fe257829003601f168201915b5050505050905090565b61101b6110146120bd565b83836122f1565b5050565b6000600854905090565b6110348484846106aa565b61104084848484612460565b50505050565b60606000600854600160075461105c9190613a41565b6110669190613a41565b905060008167ffffffffffffffff811115611084576110836135a7565b5b6040519080825280602002602001820160405280156110bd57816020015b6110aa613018565b8152602001906001900390816110a25790505b509050600080600190505b6007548110156112a35760001515600a600083815260200190815260200160002060040160009054906101000a900460ff16151514801561116a57503073ffffffffffffffffffffffffffffffffffffffff16600a600083815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b1561129657600a60008281526020019081526020016000206040518060a0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600382015481526020016004820160009054906101000a900460ff16151515158152505083838151811061127b5761127a613a12565b5b602002602001018190525060018261129391906139de565b91505b80806001019150506110c8565b5081935050505090565b60606112b882611ff8565b5060006006600084815260200190815260200160002080546112d990613901565b80601f016020809104026020016040519081016040528092919081815260200182805461130590613901565b80156113525780601f1061132757610100808354040283529160200191611352565b820191906000526020600020905b81548152906001019060200180831161133557829003601f168201915b505050505090506000611363612617565b905060008151036113785781925050506113bb565b6000825111156113ad578082604051602001611395929190613ab1565b604051602081830303815290604052925050506113bb565b6113b68461262e565b925050505b919050565b60006009543410156113fe576040517f4a9d022e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008311611438576040517f329c1f1e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61144433600754612697565b611450600754836126b5565b6040518060a0016040528060075481526020013373ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200184815260200160011515815250600a600060075481526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816003015560808201518160040160006101000a81548160ff021916908315150217905550905050600160075461159291906139de565b6007819055506115b160016007546115aa9190613a41565b8433612711565b60016007546115c09190613a41565b905092915050565b6060600080600190505b6007548110156116965760011515600a600083815260200190815260200160002060040160009054906101000a900460ff16151514801561167457503373ffffffffffffffffffffffffffffffffffffffff16600a600083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b156116895760018261168691906139de565b91505b80806001019150506115d2565b506000808267ffffffffffffffff8111156116b4576116b36135a7565b5b6040519080825280602002602001820160405280156116ed57816020015b6116da613018565b8152602001906001900390816116d25790505b5090506000600190505b6007548110156118d25760011515600a600083815260200190815260200160002060040160009054906101000a900460ff16151514801561179957503373ffffffffffffffffffffffffffffffffffffffff16600a600083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b156118c557600a60008281526020019081526020016000206040518060a0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600382015481526020016004820160009054906101000a900460ff1615151515815250508284815181106118aa576118a9613a12565b5b60200260200101819052506001836118c291906139de565b92505b80806001019150506116f7565b5080935050505090565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b3373ffffffffffffffffffffffffffffffffffffffff16611990826128f1565b73ffffffffffffffffffffffffffffffffffffffff16036119dd576040517ff840540400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000600a60008381526020019081526020016000206040518060a0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600382015481526020016004820160009054906101000a900460ff1615151515815250509050600115158160800151151503611b1c576040517f27a8bf7700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060600151341015611b5a576040517f3015947c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600a600084815260200190815260200160002060040160006101000a81548160ff0219169083151502179055503073ffffffffffffffffffffffffffffffffffffffff166342842e0e826020015133856040518463ffffffff1660e01b8152600401611bca93929190613ad5565b600060405180830381600087803b158015611be457600080fd5b505af1158015611bf8573d6000803e3d6000fd5b505050506001600854611c0b91906139de565b60088190555060008160200151905033600a600085815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600a600085815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16600954604051611d0d9061399a565b60006040518083038185875af1925050503d8060008114611d4a576040519150601f19603f3d011682016040523d82523d6000602084013e611d4f565b606091505b505090506000151581151503611d91576040517f2e5ccf2200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff1634604051611db79061399a565b60006040518083038185875af1925050503d8060008114611df4576040519150601f19603f3d011682016040523d82523d6000602084013e611df9565b606091505b505090506000151581151503611e3b576040517f2e5ccf2200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050505050565b60003373ffffffffffffffffffffffffffffffffffffffff16611e6484610ace565b73ffffffffffffffffffffffffffffffffffffffff1614611eb1576040517f49731c3b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600954341015611eed576040517f4a9d022e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611ef8838333612711565b6001600854611f079190613a41565b60088190555082905092915050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480611fe157507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80611ff15750611ff08261292e565b5b9050919050565b600080612004836128f1565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361207757826040517f7e27328900000000000000000000000000000000000000000000000000000000815260040161206e9190613330565b60405180910390fd5b80915050919050565b60006004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600033905090565b6120d28383836001612998565b505050565b6000806120e3846128f1565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161461212557612124818486612b5d565b5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146121b657612167600085600080612998565b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614612239576001600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b846002600086815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361236257816040517f5b08ba18000000000000000000000000000000000000000000000000000000008152600401612359919061329a565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516124539190613129565b60405180910390a3505050565b60008373ffffffffffffffffffffffffffffffffffffffff163b1115612611578273ffffffffffffffffffffffffffffffffffffffff1663150b7a026124a46120bd565b8685856040518563ffffffff1660e01b81526004016124c69493929190613b61565b6020604051808303816000875af192505050801561250257506040513d601f19601f820116820180604052508101906124ff9190613bc2565b60015b612586573d8060008114612532576040519150601f19603f3d011682016040523d82523d6000602084013e612537565b606091505b50600081510361257e57836040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401612575919061329a565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161461260f57836040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401612606919061329a565b60405180910390fd5b505b50505050565b606060405180602001604052806000815250905090565b606061263982611ff8565b506000612644612617565b90506000815111612664576040518060200160405280600081525061268f565b8061266e84612c21565b60405160200161267f929190613ab1565b6040516020818303038152906040525b915050919050565b6126b1828260405180602001604052806000815250612cef565b5050565b806006600084815260200190815260200160002090816126d59190613d9b565b507ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce7826040516127059190613330565b60405180910390a15050565b6000821161274b576040517f329c1f1e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040518060a001604052808481526020018273ffffffffffffffffffffffffffffffffffffffff1681526020013073ffffffffffffffffffffffffffffffffffffffff16815260200183815260200160001515815250600a60008581526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816003015560808201518160040160006101000a81548160ff021916908315150217905550905050612883308461068a565b813073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fb640004f1d14576d0c209e240cad0410e0d8c0c33a09375861fbadae2588a98d8660006040516128e4929190613e6d565b60405180910390a4505050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b80806129d15750600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b15612b055760006129e184611ff8565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015612a4c57508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b8015612a5f5750612a5d81846118dc565b155b15612aa157826040517fa9fbf51f000000000000000000000000000000000000000000000000000000008152600401612a98919061329a565b60405180910390fd5b8115612b0357838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b836004600085815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b612b68838383612d0b565b612c1c57600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603612bdd57806040517f7e273289000000000000000000000000000000000000000000000000000000008152600401612bd49190613330565b60405180910390fd5b81816040517f177e802f000000000000000000000000000000000000000000000000000000008152600401612c13929190613e96565b60405180910390fd5b505050565b606060006001612c3084612dcc565b01905060008167ffffffffffffffff811115612c4f57612c4e6135a7565b5b6040519080825280601f01601f191660200182016040528015612c815781602001600182028036833780820191505090505b509050600082602001820190505b600115612ce4578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8581612cd857612cd7613ebf565b5b04945060008503612c8f575b819350505050919050565b612cf98383612f1f565b612d066000848484612460565b505050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015612dc357508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480612d845750612d8384846118dc565b5b80612dc257508273ffffffffffffffffffffffffffffffffffffffff16612daa83612080565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310612e2a577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381612e2057612e1f613ebf565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310612e67576d04ee2d6d415b85acef81000000008381612e5d57612e5c613ebf565b5b0492506020810190505b662386f26fc100008310612e9657662386f26fc100008381612e8c57612e8b613ebf565b5b0492506010810190505b6305f5e1008310612ebf576305f5e1008381612eb557612eb4613ebf565b5b0492506008810190505b6127108310612ee4576127108381612eda57612ed9613ebf565b5b0492506004810190505b60648310612f075760648381612efd57612efc613ebf565b5b0492506002810190505b600a8310612f16576001810190505b80915050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612f915760006040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401612f88919061329a565b60405180910390fd5b6000612f9f838360006120d7565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146130135760006040517f73c6ac6e00000000000000000000000000000000000000000000000000000000815260040161300a919061329a565b60405180910390fd5b505050565b6040518060a0016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000151581525090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6130be81613089565b81146130c957600080fd5b50565b6000813590506130db816130b5565b92915050565b6000602082840312156130f7576130f661307f565b5b6000613105848285016130cc565b91505092915050565b60008115159050919050565b6131238161310e565b82525050565b600060208201905061313e600083018461311a565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561317e578082015181840152602081019050613163565b60008484015250505050565b6000601f19601f8301169050919050565b60006131a682613144565b6131b0818561314f565b93506131c0818560208601613160565b6131c98161318a565b840191505092915050565b600060208201905081810360008301526131ee818461319b565b905092915050565b6000819050919050565b613209816131f6565b811461321457600080fd5b50565b60008135905061322681613200565b92915050565b6000602082840312156132425761324161307f565b5b600061325084828501613217565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061328482613259565b9050919050565b61329481613279565b82525050565b60006020820190506132af600083018461328b565b92915050565b6132be81613279565b81146132c957600080fd5b50565b6000813590506132db816132b5565b92915050565b600080604083850312156132f8576132f761307f565b5b6000613306858286016132cc565b925050602061331785828601613217565b9150509250929050565b61332a816131f6565b82525050565b60006020820190506133456000830184613321565b92915050565b6000806000606084860312156133645761336361307f565b5b6000613372868287016132cc565b9350506020613383868287016132cc565b925050604061339486828701613217565b9150509250925092565b6000602082840312156133b4576133b361307f565b5b60006133c2848285016132cc565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b613400816131f6565b82525050565b61340f81613279565b82525050565b61341e8161310e565b82525050565b60a08201600082015161343a60008501826133f7565b50602082015161344d6020850182613406565b5060408201516134606040850182613406565b50606082015161347360608501826133f7565b5060808201516134866080850182613415565b50505050565b60006134988383613424565b60a08301905092915050565b6000602082019050919050565b60006134bc826133cb565b6134c681856133d6565b93506134d1836133e7565b8060005b838110156135025781516134e9888261348c565b97506134f4836134a4565b9250506001810190506134d5565b5085935050505092915050565b6000602082019050818103600083015261352981846134b1565b905092915050565b61353a8161310e565b811461354557600080fd5b50565b60008135905061355781613531565b92915050565b600080604083850312156135745761357361307f565b5b6000613582858286016132cc565b925050602061359385828601613548565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6135df8261318a565b810181811067ffffffffffffffff821117156135fe576135fd6135a7565b5b80604052505050565b6000613611613075565b905061361d82826135d6565b919050565b600067ffffffffffffffff82111561363d5761363c6135a7565b5b6136468261318a565b9050602081019050919050565b82818337600083830152505050565b600061367561367084613622565b613607565b905082815260208101848484011115613691576136906135a2565b5b61369c848285613653565b509392505050565b600082601f8301126136b9576136b861359d565b5b81356136c9848260208601613662565b91505092915050565b600080600080608085870312156136ec576136eb61307f565b5b60006136fa878288016132cc565b945050602061370b878288016132cc565b935050604061371c87828801613217565b925050606085013567ffffffffffffffff81111561373d5761373c613084565b5b613749878288016136a4565b91505092959194509250565b600067ffffffffffffffff8211156137705761376f6135a7565b5b6137798261318a565b9050602081019050919050565b600061379961379484613755565b613607565b9050828152602081018484840111156137b5576137b46135a2565b5b6137c0848285613653565b509392505050565b600082601f8301126137dd576137dc61359d565b5b81356137ed848260208601613786565b91505092915050565b6000806040838503121561380d5761380c61307f565b5b600061381b85828601613217565b925050602083013567ffffffffffffffff81111561383c5761383b613084565b5b613848858286016137c8565b9150509250929050565b600080604083850312156138695761386861307f565b5b6000613877858286016132cc565b9250506020613888858286016132cc565b9150509250929050565b600080604083850312156138a9576138a861307f565b5b60006138b785828601613217565b92505060206138c885828601613217565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061391957607f821691505b60208210810361392c5761392b6138d2565b5b50919050565b6000606082019050613947600083018661328b565b6139546020830185613321565b613961604083018461328b565b949350505050565b600081905092915050565b50565b6000613984600083613969565b915061398f82613974565b600082019050919050565b60006139a582613977565b9150819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006139e9826131f6565b91506139f4836131f6565b9250828201905080821115613a0c57613a0b6139af565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000613a4c826131f6565b9150613a57836131f6565b9250828203905081811115613a6f57613a6e6139af565b5b92915050565b600081905092915050565b6000613a8b82613144565b613a958185613a75565b9350613aa5818560208601613160565b80840191505092915050565b6000613abd8285613a80565b9150613ac98284613a80565b91508190509392505050565b6000606082019050613aea600083018661328b565b613af7602083018561328b565b613b046040830184613321565b949350505050565b600081519050919050565b600082825260208201905092915050565b6000613b3382613b0c565b613b3d8185613b17565b9350613b4d818560208601613160565b613b568161318a565b840191505092915050565b6000608082019050613b76600083018761328b565b613b83602083018661328b565b613b906040830185613321565b8181036060830152613ba28184613b28565b905095945050505050565b600081519050613bbc816130b5565b92915050565b600060208284031215613bd857613bd761307f565b5b6000613be684828501613bad565b91505092915050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302613c517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82613c14565b613c5b8683613c14565b95508019841693508086168417925050509392505050565b6000819050919050565b6000613c98613c93613c8e846131f6565b613c73565b6131f6565b9050919050565b6000819050919050565b613cb283613c7d565b613cc6613cbe82613c9f565b848454613c21565b825550505050565b600090565b613cdb613cce565b613ce6818484613ca9565b505050565b5b81811015613d0a57613cff600082613cd3565b600181019050613cec565b5050565b601f821115613d4f57613d2081613bef565b613d2984613c04565b81016020851015613d38578190505b613d4c613d4485613c04565b830182613ceb565b50505b505050565b600082821c905092915050565b6000613d7260001984600802613d54565b1980831691505092915050565b6000613d8b8383613d61565b9150826002028217905092915050565b613da482613144565b67ffffffffffffffff811115613dbd57613dbc6135a7565b5b613dc78254613901565b613dd2828285613d0e565b600060209050601f831160018114613e055760008415613df3578287015190505b613dfd8582613d7f565b865550613e65565b601f198416613e1386613bef565b60005b82811015613e3b57848901518255600182019150602085019450602081019050613e16565b86831015613e585784890151613e54601f891682613d61565b8355505b6001600288020188555050505b505050505050565b6000604082019050613e826000830185613321565b613e8f602083018461311a565b9392505050565b6000604082019050613eab600083018561328b565b613eb86020830184613321565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fdfea2646970667358221220b9229fd6beee6e7be04b0029941cc6e841b667ba7ab30e59217e08e84ae2eb7b64736f6c63430008180033",
    "linkReferences": {},
    "deployedLinkReferences": {}
};


export const NFT_MARKETPLACE_ABI = NFT_MARKETPLACE.abi;
