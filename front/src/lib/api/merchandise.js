import client from "./client";
import qs from "qs";

export const writeMerchandise = ({ vendorid, title, body, price }) => {
  console.log(`writeAPI vendorid : ${vendorid} title : ${title}, body : ${body}`);
  return client.post(`/vendor/register`, {
    vendorId : vendorid,
    merchandiseName: title,
    merchandisePrice : price,
    merchandiseDescription: body,
  }); // 이렇게 된 경우에는 return을 꼭 넣어줘야 한다!!
};

export const readMerchandise = (id) => {
  console.log(`readMerchandise id : ${id}`)
  return client.get(`/vendor/merchandise/${id}`);}

export const merchandiseList = ({ vendorid }) => {
  return client.get(`/vendor/merchandiseinfo/${vendorid}`);
  //return client.get(`/merchandise/list?${queryString}`);
};


export const merchandiseListByDomain = ({ vendordomain }) => {
  return client.get(`/vendor/merchandiseinfobydomain/${vendordomain}`);
  //return client.get(`/merchandise/list?${queryString}`);
};

export const updateMerchandise = ({ id, title, body, tags }) =>
  client.post("/merchandise/register", { id, title, body, tags });

export const deleteMerchandise = (id) => client.delete(`merchandise/${id}`);
