import cookieCutter from "cookie-cutter";

function save(payload: AuthPayload) {
  cookieCutter.set("token", payload.access_token);
  cookieCutter.set("refreshToken", payload.refresh_token);
  cookieCutter.set("role", payload.role);
}

function clean() {
  cookieCutter.set("token", "");
  cookieCutter.set("refreshToken", "");
  cookieCutter.set("role", "");
}

const cookies = {
  save,
  clean
};

export default cookies;
