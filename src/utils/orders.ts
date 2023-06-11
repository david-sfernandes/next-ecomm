import { OrderStatus } from "../../typings/OrderStatus";

const orders = {
  async get(token: string) {
    const res = await fetch("http://localhost:8080/api/v1/order", {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (res.status > 399 && res.status < 200) throw new Error();
    return await res.json();
  },
  async updateStatus(status: OrderStatus, orderId: number, token: string) {
    const res = await fetch("http://localhost:8080/api/v1/order", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: status,
        orderId: orderId,
      }),
    });

    if (res.status > 399 && res.status < 200) throw new Error();
    return await res.json();
  },
  async postOrder(token: string, cart: CartItem[]) {
    const body = {
      products: cart.map((item) => ({
        productId: item.id,
        quantity: item.qty,
      })),
      orderDate: new Date().toISOString(),
    };

    const res = await fetch("http://localhost:8080/api/v1/order", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (res.status >= 300) throw new Error();
    return await res.json();
  },
};

export default orders;
