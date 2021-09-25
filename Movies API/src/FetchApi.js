import { directive, isTemplateElement } from "@babel/types";
import { useState } from "react";
const Fetchapi = () => {
    const [data, setData] = useState([])
  const apiGet = () => {
    fetch("https://randomuser.me/api")
      .then((response) => response.json())
      .then((json) => {
          console.log(json);
          setData(json);
      });
  };
  return (
    <div>
       My Api
      <br />
        <button onClick={apiGet}> Fetch Api</button>
      <br />
        <pre>{JSON.stringify(data,null,2)}</pre>

        
    </div>
  );
};
export default Fetchapi;
