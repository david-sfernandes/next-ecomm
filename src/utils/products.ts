import { ProductRequest } from "./productRequest";

export async function getProductById(id: number) {
  const res = await fetch(`http://localhost:8080/api/v1/products/${id}`);

  if (res.status > 399 && res.status < 200) throw new Error();
  return await res.json();
}

export async function getProducts() {
  const res = await fetch("http://localhost:8080/api/v1/products/");

  if (res.status > 399 && res.status < 200) throw new Error();
  return await res.json();
}

export async function addProduct(
  token: string,
  mode: "POST" | "PUT",
  body: ProductRequest
) {
  const res = await fetch(`http://localhost:8080/api/v1/products/`, {
    method: mode,
    headers: { Authorization: `Bearer ${token}` },
    body: body.data,
  });

  if (res.status > 399 && res.status < 200) throw new Error();
  return await res.json();
}
