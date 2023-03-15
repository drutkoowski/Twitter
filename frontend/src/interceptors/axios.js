import axios from 'axios'
import { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'

axios.defaults.baseURL = import.meta.env.VITE_DEVELOPMENT_API_URL

const AxiosInterceptor = ({ children }) => {
  // const navigate = useNavigate();

  useEffect(() => {
    const resInterceptor = response => {
      return response
    }

    const errInterceptor = error => {
      if (error.response.status === 401) {
        // navigate('/login');
      }

      return Promise.reject(error)
    }

    const interceptor = axios.interceptors.response.use(resInterceptor, errInterceptor)

    return () => axios.interceptors.response.eject(interceptor)

    // }, [navigate])
  }, [])
  return children
}
export { AxiosInterceptor }
