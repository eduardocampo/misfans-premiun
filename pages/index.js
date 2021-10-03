import Container from '@/components/UI/Container/Container'
import Grid from '@/components/UI/Grid/Grid'
import CardProfile from '@/components/UI/Profile/CardProfile'
import Skeleton from '@/components/UI/Skeleton/Skeleton'
import Text from '@/components/UI/Text/Text'
import useUser from '@/lib/Hooks/useUser'
import Image from 'next/image'
import { useRef, useState } from 'react'

export default function Home() {
  const { user, isLoading, isError } = useUser()
  const [searchKey, setSearchKey] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const inputSearch = useRef('')

  if (isError) return <div>failed to load</div>
  if (isLoading)
    return (
      <Container variant="xl" padding="0">
        <Skeleton variant="bg_profile_image" />

        <div className="shadow bg-white">
          <Container variant="xl">
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
            <Container variant="xl">
              <div className="py-5">
                <Grid variant="gridB">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                    <div
                      key={item}
                      className="shadow py-8 rounded-md bg-gray-50"
                    >
                      <Container variant="xl">
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

  //Easy search
  const searchOnChange = () => {
    setSearchKey(inputSearch.current.value)
    if (searchKey !== '') {
      const newUserFilter = user.data.filter((item) => {
        return Object.values(item)
          .join(' ')
          .toLowerCase()
          .includes(searchKey.toLowerCase())
      })
      setSearchResults(newUserFilter)
    } else {
      setSearchResults(user.data)
    }
  }

  console.log('datasss', searchResults || [])
  return (
    <Container variant="xl" padding="0">
      <div
        style={{ position: 'relative', height: '100%', width: '100%' }}
        className="flex items-center justify-center"
      >
        <div style={{ position: 'absolute', zIndex: 30 }}>
          <Text variant="h3" size="6xl" color="white">
            Findity
          </Text>
        </div>
        <div className="profile_bg_image">
          <Image
            layout="intrinsic"
            objectFit="cover"
            height="300"
            width="1280"
            src="/profile.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="shadow bg-white">
        {/*heading*/}
        <Container variant="xl">
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
          <Container variant="xl">
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
                ref={inputSearch}
                value={searchKey}
                onChange={searchOnChange}
                type="text"
                id="search-input"
                placeholder="Sara, edita, roberto, carolina"
                className="flex-auto py-5 text_body2 color-gray-500"
              />
            </div>
          </Container>
        </form>

        {/*CARD*/}
        <div className="py-5">
          <Container variant="xl">
            <div className="py-5">
              <Grid variant="gridB">
                {searchKey.length < 1
                  ? user.data.map((item) => (
                      <CardProfile key={item.id} data={item} />
                    ))
                  : searchResults.map((item) => (
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
