import React, { useState } from "react";
import axios from "axios";

const Axiostest = () => {
  const [info, setInfo] = useState();
  const myRequest = async () => {
    const res = await axios.get("https://api.github.com/users/fojanb");
    // console.log(res);
    console.log(
      "Boom!Your GitHub information had been fetched successfully(^_^)"
    );
    setInfo(res);
  };
  return (
    <div>
      <button onClick={myRequest}>Click to get data from server</button>
    </div>
  );
};
export default Axiostest;

// What axios will return ? it returns an object (json) consist of :
// data - the payload returned from the server
// status - the HTTP code returned from the server
// statusText - the HTTP status message returned by the server
// headers - headers sent by server
// config - the original request configuration
// request - the request object
// ---------------------------------------------------------------------------------
// These are basic methods for generating requests in axios.
// axios.request(config)
// axios.get(url[, config])
// axios.delete(url[, config])
// axios.head(url[, config])
// axios.options(url[, config])
// axios.post(url[, data[, config]])
// axios.put(url[, data[, config]])
// axios.patch(url[, data[, config]])