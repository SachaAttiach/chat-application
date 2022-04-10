import React, { useState, useEffect } from "react";
//to help get data from the url
import queryString from "query-string";
import io from "socket.io-client";

let socket;

const Chat = ({ location }) => {
  //perhaps put these two into context so I don't repeat code.
  //also, location.search is something we use from react router dom
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const ENDPOINT = "localhost:5000";
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    console.log(socket);
  }, [ENDPOINT, location.search]);
  return <h1>Chat</h1>;
};
export default Chat;
