import axios from "axios";

export const initiateTxn = (props) => {
  return axios.post("/payments", props);
};

export const getPaymentStatus = (params) => {
  return axios.get("/payments", { params });
};
