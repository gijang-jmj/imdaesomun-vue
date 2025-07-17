import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'x-imdaesomun-api-key': 'U2FsdGVkX18Szkzvd4HgPj5wrSzD4WhlLbEOjc5Poww=',
  },
})

// 요청 인터셉터
// axiosInstance.interceptors.request.use(config => {
//   const token = localStorage.getItem('accessToken');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

export default axiosInstance
