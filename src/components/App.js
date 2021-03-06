import React from 'react';
import Container from 'react-bootstrap/Container';
import { HashRouter, Router, Route, Switch } from 'react-router-dom';
import { ipcRenderer, ipcMain } from 'electron';

import Top from './top/Top';
import Setup from './setup/Setup';
import Dashboard from './dashboard/Dashboard';
import Nodes from './nodes/Nodes';
import Blockchain from './blockchain/Blockchain';
import Blocks from './blocks/Blocks';
import Transactions from './transactions/Transactions';
import Settings from './setting/Setting';
import Support from './support/Support';


function App() {
	return (
		<HashRouter>
			<Container>
				<Route exact path="/" component={Top}></Route>
				<Route exact path="/setup" component={Setup}></Route>
				<Route exact path="/workspaces/:ws/dashboard" component={Dashboard}></Route>
				<Route exact path="/workspaces/:ws/nodes" component={Nodes}></Route>
				<Route exact path="/workspaces/:ws/blockchain" component={Blockchain}></Route>
				<Route exact path="/workspaces/:ws/blocks" component={Blocks}></Route>
				<Route exact path="/workspaces/:ws/transactions" component={Transactions}></Route>
				<Route exact path="/workspaces/:ws/setting" component={Settings}></Route>
				<Route exact path="/workspaces/:ws/supports" component={Support}></Route>
			</Container>
		</HashRouter>
	)
}


export default App;
