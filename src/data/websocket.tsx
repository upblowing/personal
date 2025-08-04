'use client'

import { useEffect, useState } from "react";
import { presence } from "../types/lanyard";

const OPCODES = {
	INFO: 0,
	HELLO: 1,
	INIT: 2,
	HEARTBEAT: 3,
};

let heartbeatInterval;

const userId = "120088896561217536";
const ws = new WebSocket("wss://api.lanyard.rest/socket");

export default function getLanyard () {
	const [userData, setUserData] = useState<presence>();
  
	useEffect(() => {
		const connect = () => {
				ws.onopen = (event: any): void => {
				  	console.log("Connected");
				};
  
				ws.onmessage = (event: any): void => {
				  	const _data = JSON.parse(event.data);
  
				  	switch (_data.op) {
						case OPCODES.HELLO:
						  	ws.send(
								JSON.stringify({
								  	op: OPCODES.INIT,
								  	d: {
										subscribe_to_id: userId,
								  	},
								})
						  	);
  
					  	heartbeatInterval = setInterval(() => {
							ws.send(
							  	JSON.stringify({
									op: OPCODES.HEARTBEAT,
							  	})
							);
					  	}, _data.d.heartbeat_interval);
					  	break;
  
						case OPCODES.INFO:
						  	switch (_data.t) {
								case "INIT_STATE":
								case "PRESENCE_UPDATE":
							  		if (_data.d) setUserData(_data.d);
							  	break;
  
								default:
							  		break;
						  	}
						  	break;
				  	}
				};
  
				ws.onerror = (event: any): void => {
				  	console.log(event.data);
				};
  
				ws.onclose = (event: any): void => {
                    console.log(`closed » reason: ${event.reason}`);
				  	connect();
				};
		  };
		  connect();
	});
	return userData;
};
