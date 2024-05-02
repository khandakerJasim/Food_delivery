import axios from "axios";
export const Commonrequest = async (methods, header, url, body) => {
  let config = {
    method: methods,
    url,
    headers: header ? header : { "Content-Type": "application/json" },
    data: body,
  };

  //axios instance
  return axios(config)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};
