const logger = require('../utils/logger');
const mongoose = require('mongoose');
require ('../models/Workspace');
const Workspace = mongoose.model('workspaces');



const db = require('../../../cfg/db')

const WorkspaceController = (() => {
  return {
    init: (config, nodes) => {
      new Workspace({
        name: config.workspaceName,
        server_config: {
          rpc_listen_port: config.rpcport,
          rest_listen_port: config.restport,
        },
        blockchain_config: {
          minepace: config.minepace,
        },
        nodes: nodes
      })
      .save()
      .then(() => logger.info("Success Saving Workspace Config!"))
      .catch(err => logger.error(err))
    },
    getAll: async () => {
      mongoose.Promise = global.Promise;
      mongoose.connect(db.mongoURI)
        .then(() => logger.info('MongoDB Connected...'))
        .catch(err => logger.error(err))

      let workspaces = await Workspace.find()
        .then(res => {
          return res
        });

      return workspaces;
    },
    get: async (workspaceName) => {
      workspaceName = "test-ws";
      let ws = await Workspace.find({name: workspaceName})
        .then(res => {
          return res
        })
      return ws
    },
    destroy: () => {
      
    }
  }
})()

module.exports = WorkspaceController;