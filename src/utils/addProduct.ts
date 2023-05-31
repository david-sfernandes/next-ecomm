import { ProductRequest } from "./productRequest";

export const addProduct = async (mode: "POST" | "PUT", body: ProductRequest) => {


  const res = await fetch(`http://localhost:8080/api/v1/products/`, {
    method: "POST",
    headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBtYWlsLmNvbSIsImlhdCI6MTY4NTUwMTY0OCwiZXhwIjoxNjg1NTg4MDQ4fQ.gkUWhxQvPEk1dUptLEsRYTN9HCdJEwlajEqT1DflLxY",
      // "Content-Type": "multipart/form-data",
      // "X-custom-Header": "header value"
    },
    body: body.data,
  });
  if (res.status > 399 && res.status < 200) {
    throw new Error();
  }
  return await res.json();
};