import cookies from "./cookies";
import { ProductRequest } from "./productRequest";

const token = cookies.getByKey("token");

export const addProduct = async (
  mode: "POST" | "PUT",
  body: ProductRequest
) => {
  const res = await fetch(`http://localhost:8080/api/v1/products/`, {
    method: mode,
    headers: { Authorization: `Bearer ${token}` },
    body: body.data,
  });

  if (res.status > 399 && res.status < 200) throw new Error();
  return await res.json();
};
