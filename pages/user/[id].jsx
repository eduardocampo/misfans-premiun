import Container from '@/components/UI/Container/Container'
import ProfileUser from '@/components/UI/Profile/ProfileUser'
import useUser from '@/lib/Hooks/useUser'
import { useRouter } from 'next/router'

const Profile = () => {
  const {
    query: { id },
  } = useRouter()
  const { user, isError, isLoading } = useUser(id)

  if (isError) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  console.log('data', user || [])

  return (
    <Container>
      <div className="shadow bg-white rounded-md">
        <ProfileUser data={user} />
      </div>
    </Container>
  )
}

export default Profile
