import axios from "axios";
import { OrderStatus } from "../../typings/OrderStatus";
import axiosConfigs from "./requestHandler";

const ordersRequest = axios.create(
  axiosConfigs.defaultConfiguration("http://localhost:8080/api/v1/order")
);

ordersRequest.interceptors.request.use(
  async (config) => axiosConfigs.interceptorRequest(config),
  (error) => Promise.reject(error)
);

ordersRequest.interceptors.response.use(
  (response) => response,
  async (error) => axiosConfigs.interceptorResponse(ordersRequest, error)
);

export async function getOrders() {
  const res = await ordersRequest.get("");

  if (res.status >= 300) throw new Error();
  return await res.data;
}

export async function updateOrderStatus(status: OrderStatus, orderId: number) {
  const res = await ordersRequest.put("", {
    status: status,
    orderId: orderId,
  });

  if (res.status >= 300) throw new Error();
}

export async function postOrder(cart: CartItem[]) {
  const res = await ordersRequest.post("", {
    products: cart.map((item) => ({
      productId: item.id,
      quantity: item.qty,
    })),
    orderDate: new Date().toISOString(),
  });
  if (res.status >= 300) throw new Error();
  return await res.data;
}
