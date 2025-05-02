import { useState } from "react";

/*
useRequest Hook
  returns: { loadStatus: 0|1|2|3, resObj (PARSED body of good response), sendRequest, resetStatus, startLoading }
  Signatures:
    reqData: {status: 0|1|2|3|4, resObj: Object | Error}
    sendRequest: function(data, modifier) => Promise (must resolve to a response object, NOT resObj)
    resetStatus: void function()   
    startLoading: void function()

Status:
    0 ----> not sent
    1 -----> request sent, waiting for response
    2 ----> response received successfully
    3 ----> response is not okay
*/

export default function useRequest(
  fetcher,
  defaultResObj = null,
  defaultModifier = (before) => before
) {
  const [loadStatus, setLoadStatus] = useState(0);
  const [resObj, setResObj] = useState(defaultResObj);

  function sendRequest(data, modifier = defaultModifier) {
    /* Returns a promise which resolves to resObject if the request succeeded at the network layer. The promise gets rejected to the same error*/
    return new Promise((resolve, reject) => {
      setLoadStatus(1);
      fetcher(data)
        .then((res) => {
          // the backend must return an internal status of 200-299 to indicate success. Any other status will be considered as bad.
          if (!res.ok) {
            throw new Error(
              "Bad Response: Some error occured during sendRequest!!!"
            );
          }
          return res.json();
        })
        .then(async (responseObj) => {
          const modifiedResObj = await modifier(responseObj);
          setResObj(modifiedResObj);
          setLoadStatus(2);
          resolve(modifiedResObj);
        })
        .catch((error) => {
          setLoadStatus(3);
          reject(error);
        });
    });
  }

  function resetStatus() {
    /*
      This will just reset the status to 0. Resetting (cancelling) the request will be implemented later.    
    */
    setLoadStatus(0);
  }

  function startLoading() {
    // this function sets status to 1, ONLY
    setLoadStatus(1);
  }

  return { loadStatus, resObj, sendRequest, resetStatus, startLoading };
}

export function hasResolved(reqStatus) {
  return reqStatus === 2 || (reqStatus === 3) | (reqStatus === 4);
}
