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

function getByKey(key: CookiesKeys) {
  return cookieCutter.get(key);
}

const useCookies = () => {
  return {
    save,
    clean,
    getByKey
  };
};

export default useCookies;
