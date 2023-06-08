export const auth = async (mode: AuthMode, data: AuthFormData) => {
  let body: AuthBody = { email: data.email, password: data.password };
  if (mode == "signup") {
    body = data;
    body.role = "USER";
  }

  const res = await fetch(`http://localhost:8080/api/v1/auth/${mode}`, {
    method: "POST",
    body: JSON.stringify(body),
  }).then(r => {
    console.log(r)
    return r.json();
  });
  if (res.status > 399 && res.status < 200) {
    throw new Error();
  }
  return await res;
};
