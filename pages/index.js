import Container from '@/components/UI/Container/Container'
import Grid from '@/components/UI/Grid/Grid'
import CardProfile from '@/components/UI/Profile/CardProfile'
import Skeleton from '@/components/UI/Skeleton/Skeleton'
import Text from '@/components/UI/Text/Text'
import useUser from '@/lib/Hooks/useUser'
import Image from 'next/image'

export default function Home() {
  const { user, isLoading, isError } = useUser()

  if (isError) return <div>failed to load</div>
  if (isLoading)
    return (
      <Container>
        <div className="my-6">
          <Skeleton variant="bg_profile_image" />
        </div>
        <div className="shadow bg-white rounded-md">
          <Container>
            <div className="sm:flex sm:items-center sm:justify-end sm:flex-1">
              <div className="py-5 flex-1">
                <Text variant="h1">Profiles</Text>
                <Text variant="body1" color="500">
                  Frontend Developer Profile
                </Text>
              </div>
            </div>
          </Container>
          <div className="py-5">
            <Container>
              <div className="py-5">
                <Grid variant="gridB">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                    <div
                      key={item}
                      className="shadow py-8 rounded-md bg-gray-50"
                    >
                      <Container>
                        <div className="flex flex-col text-center">
                          <div className="flex-shrink-0 mx-auto">
                            <Skeleton variant="avatar" />
                            <div className="mt-6">
                              <Skeleton variant="text" />
                            </div>
                          </div>
                        </div>
                        <div className="flex mt-6 flex-col">
                          <Skeleton variant="button" />
                        </div>
                      </Container>
                    </div>
                  ))}
                </Grid>
              </div>
            </Container>
          </div>
        </div>
      </Container>
    )
  console.log('data', user || [])
  return (
    <Container>
      <div
        style={{ position: 'relative', height: '100%', width: '100%' }}
        className="flex items-center justify-center"
      >
        <div style={{ position: 'absolute', zIndex: 30 }}>
          <Text variant="h3" size="6xl" color="white">
            Findity
          </Text>
        </div>
        <div className="profile_bg_image my-6">
          <Image
            className="rounded-md"
            layout="intrinsic"
            objectFit="cover"
            height="300"
            width="1280"
            src="/profile.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="shadow bg-white rounded-md">
        {/*heading*/}
        <Container>
          <div className="sm:flex sm:items-center sm:justify-end sm:flex-1">
            <div className="py-5 flex-1">
              <Text variant="h1">Profiles</Text>
              <Text variant="body1" color="500">
                Frontend Developer Profile
              </Text>
            </div>
          </div>
        </Container>

        {/*search*/}
        <form className="sticky top-0 z-20 bg-white border-t border-b border-color">
          <Container>
            <div className="flex">
              <label
                htmlFor="search-input"
                className="flex-none pr-3 flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 color-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </label>
              <input
                type="text"
                id="search-input"
                placeholder="Search all user"
                className="flex-auto py-5 text_body2 color-gray-500"
              />
            </div>
          </Container>
        </form>

        {/*CARD*/}
        <div className="py-5">
          <Container>
            <div className="py-5">
              <Grid variant="gridB">
                {user.data.map((item) => (
                  <CardProfile key={item.id} data={item} />
                ))}
              </Grid>
            </div>
          </Container>
        </div>
      </div>
    </Container>
  )
}
