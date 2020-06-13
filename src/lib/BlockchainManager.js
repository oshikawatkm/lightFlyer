const Blockchain = require("../objects/Blockchain");

const blockchainManager = (() => {
  let blockchain;
  return {
    init: (config) => {
      blockchain = new Blockchain(
        config.network,
        config.automine,
        config.mine_pace
      );
    },
    registerNode: (node) => {
      blockchain.registerNode(node);
    }
  }
})()


module.exports = blockchainManager;