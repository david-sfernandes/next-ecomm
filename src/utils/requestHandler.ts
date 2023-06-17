import { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import cookies from "./cookies";

async function refreshToken() {
  const cookieCutter = (await import("cookie-cutter")).default;
  const res = await fetch("https://movestore-production.up.railway.app/api/v1/auth/refresh", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + cookieCutter.get("refreshToken"),
    },
  });
  return await res.json();
}

const defaultConfiguration = (
  url: string,
  contentType = "application/json"
) => {
  return {
    baseURL: url,
    headers: { "Content-Type": contentType },
    withCredentials: true,
  };
};

const interceptorRequest = async (config: InternalAxiosRequestConfig<any>) => {
  const cookieCutter = (await import("cookie-cutter")).default;
  const token = cookieCutter.get("token");
  if (token) config.headers["Authorization"] = "Bearer " + token;
  return config;
};

const interceptorResponse = async (request: AxiosInstance, error: any) => {
  const originalRequest = error.config;
  if (error.response.status === 403 && !originalRequest._retry) {
    originalRequest._retry = true;

    const payload = await refreshToken();
    cookies.save(payload);
    request.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${payload.access_token}`;
    return request(originalRequest);
  }
  return Promise.reject(error);
};

const axiosConfigs = {
  defaultConfiguration,
  interceptorResponse,
  interceptorRequest,
};

export default axiosConfigs;
