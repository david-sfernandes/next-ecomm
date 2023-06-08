import useCookies from "./cookies";

// const token = useCookies().getByKey("token");

const orders = {
  async get(token: string) {
    const res = await fetch("http://localhost:8080/api/v1/orders", {
      headers: { Authorization: `Bearer ${token}` },
    })

    if (res.status > 399 && res.status < 200) throw new Error();
    return await res.json();
  },
  async updateStatus(status: OrderStatus, orderId: number, token: string) {
    const res = await fetch("http://localhost:8080/api/v1/orders", {
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify({
        status: status,
        orderId: orderId,
      }),
    });

    if (res.status > 399 && res.status < 200) throw new Error();
    return await res.json();
  },
};

export default orders;
