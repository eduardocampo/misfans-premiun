import Container from '@/components/UI/Container/Container'
import Grid from '@/components/UI/Grid/Grid'
import ProfileUser from '@/components/UI/Profile/ProfileUser'
import Skeleton from '@/components/UI/Skeleton/Skeleton'
import useUser from '@/lib/Hooks/useUser'
import { useRouter } from 'next/router'

const Profile = () => {
  const {
    query: { id },
  } = useRouter()
  const { user, isError, isLoading } = useUser(id)

  if (isError)
    return (
      <Container variant="xl">
        <div className="shadow bg-white rounded-md">Error</div>
      </Container>
    )
  if (isLoading)
    return (
      <Container variant="xl" padding="0">
        <div className="shadow bg-white rounded-md">
          <>
            <div className="border-b border-color pb-9 top-0 z-20">
              <Skeleton variant="bg_profile_image" />
              <Container variant="xl">
                <div className="profile_info">
                  <div className="flex sm:mr-5">
                    <Skeleton variant="avatar" />
                  </div>
                  <div className="mt-6 sm:flex sm:items-center sm:justify-end sm:flex-1">
                    <div className="mt-6 flex-1">
                      <Skeleton variant="text" />
                    </div>
                  </div>
                </div>
              </Container>
              <div className="pb-4">
                <div className="py-5">
                  <Container variant="xl">
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                  </Container>
                </div>
                <div className="border-t border-color py-5">
                  <Container variant="xl">
                    <Grid>
                      {[1, 2, 3, 4, 5].map((item) => (
                        <div key={item} className="sm:col-span-1">
                          <Skeleton variant="text" />
                        </div>
                      ))}
                    </Grid>
                  </Container>
                </div>
              </div>
            </div>
          </>
        </div>
      </Container>
    )

  return (
    <Container variant="xl" padding="0">
      <div className="shadow bg-white rounded-md">
        <ProfileUser data={user} />
      </div>
    </Container>
  )
}

export default Profile
