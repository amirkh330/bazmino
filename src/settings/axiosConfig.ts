import axios, { AxiosInstance } from "axios";

export const CallApi: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// memoized to prevent race conditions
// const handleRefreshToken = memoize(
//   async function refreshTokenFn() {
//     const refreshToken = useAuthStore.getState().refreshToken;

//     try {
//       await axios
//         .post(
//           "auth/refresh/",
//           { refresh: refreshToken },
//           {
//             baseURL: `${BASE_URL}`,
//             headers: {
//               Accept: "application/json",
//               "Content-Type": "application/json",
//             },
//           }
//         )
//         .then((res) => {
//           useAuthStore.setState({ accessToken: res.data.response.access });
//           useAuthStore.setState({ refreshToken: res.data.response.refresh });
//         });
//     } catch (error) {
//       useAuthStore.setState({ accessToken: "" });
//       useAuthStore.setState({ refreshToken: "" });
//       window.location.href = RoutesName.LOGIN;
//       return Promise.reject(error);
//     }
//   },
//   { promise: true, maxAge: 5000 }
// );

// fetchApi.interceptors.request.use(
//   (config) => {
//     const accessToken = useAuthStore.getState().accessToken;
//     const refreshToken = useAuthStore.getState().refreshToken;

//     const tokensData = { accessToken, refreshToken };

//     if (tokensData.accessToken) {
//       config.headers["Authorization"] = `JWT ${tokensData.accessToken}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// fetchApi.interceptors.response.use(
//   (response) => {
//     return Promise.resolve(response.data);
//   },
//   async (error) => {
//     const originalRequest = error.config;

//     if (
//       error.response.status === 401 &&
//       !originalRequest._retry &&
//       error.request.responseURL.search("auth/login/") === -1
//     ) {
//       originalRequest._retry = true;

//       try {
//         await handleRefreshToken();
//         return fetchApi(originalRequest);
//       } catch (refreshError) {
//         return Promise.reject(refreshError);
//       }
//     }
//     return Promise.reject(error);
//   }
// );
