import axios from 'axios'
import useSWR from 'swr'

const API = process.env.NEXT_PUBLIC_API
const fetcher = (url) =>
  axios
    .get(url, {
      headers: {
        'Content-Type': 'application/json',
        'app-id': process.env.NEXT_PUBLIC_API_ID,
      },
    })
    .then((res) => res.data)

const useUser = (userId) => {
  const { data, error } = useSWR(
    `${API}${userId ? '/' + userId : '?limit=10'}`,
    fetcher
  )
  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  }
}
export default useUser
