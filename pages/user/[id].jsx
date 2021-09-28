import { useRouter } from 'next/router'
import useUser from '../../lib/Hooks/useUser'

const Profile = () => {
  const {
    query: { id },
  } = useRouter()
  const { user, isError, isLoading } = useUser(id)

  if (isError) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  console.log('data', user || [])

  return (
    <div>
      <div>User: id: {id}</div>
      <div>{user.firstName}</div>
    </div>
  )
}

export default Profile
