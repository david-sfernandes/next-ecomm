export const auth = async (mode: AuthMode, data: AuthFormData) => {
  let body: AuthBody = { email: data.email, password: data.password };
  if (mode == "signup") {
    body = data;
    body.role = "USER";
  }

  const res = await fetch(`/api/v1/auth/${mode}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  
  if (res.status > 399 && res.status < 200) throw new Error();
  return await res.json();
};
