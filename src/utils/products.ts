import axios from "axios";
import { ProductRequest } from "./productRequest";
import axiosConfigs from "./requestHandler";

const productRequest = axios.create(
  axiosConfigs.defaultConfiguration("https://movestore-production.up.railway.app/api/v1/products", "multipart/form-data")
);

productRequest.interceptors.request.use(
  async (config) => axiosConfigs.interceptorRequest(config),
  (error) => Promise.reject(error)
);

productRequest.interceptors.response.use(
  (response) => response,
  async (error) => axiosConfigs.interceptorResponse(productRequest, error)
);

export async function getProductById(id: number) {
  const res = await fetch(`https://movestore-production.up.railway.app/api/v1/products/${id}`);

  if (res.status >= 300) throw new Error();
  return await res.json();
}

export async function getProducts() {
  const res = await fetch("https://movestore-production.up.railway.app/api/v1/products/");

  if (res.status >= 300) throw new Error();
  return await res.json();
}

export async function addProduct(body: ProductRequest) {
  const res = await productRequest.post("/", body.data);

  if (res.status >= 300) throw new Error();
  return await res.data;
}
