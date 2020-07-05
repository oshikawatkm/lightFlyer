const WorkdspaceServices = require('../services/workspace');
const LNnodeServices  = require('../services/lnnode');
const PeerServices    = require('../services/peer');
const ChannelServices = require('../services/channel');
const InvoiceServices = require('../services/invoice');


const LNnodeController = (() => {
  let workspace;
  let wsId;
  let selfIPubkey;
  let selfAddr;

  return {
    init: async (workspaceId) => {
      wsId = workspaceId
      let SelfLNnode = await LNnodeServices.findOne(wsId, "You");
      console.log(SelfLNnode)
      selfIPubkey = SelfLNnode.publicKey;
      selfAddr    = SelfLNnode.address;
    },
    factory: async (wsId, config) => {
      for (i = 0; i <= config.nodeNumber - 1 ;i++) {
        await LNnodeServices.create(wsId, config);
      }
    },
    addInvoiceByOthers:async (senderIPubkey, receiverIPubkey) => {
      if(await !ChannelServices.isChannel()) {
        return
      }
      
    },
    payment: async (options) => {
      await InvoiceServices.payment(oid, options);
    }
  }
})()

module.exports = LNnodeController;