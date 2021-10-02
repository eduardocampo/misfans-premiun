import useUser from '@/lib/Hooks/useUser'
import Image from 'next/image'
import React from 'react'
import Avatar from '../Avatar/Avatar'
import Button from '../Button/Button'
import Container from '../Container/Container'
import Grid from '../Grid/Grid'
import Post from '../Post/Post'
import Text from '../Text/Text'
import ProfileInfo from './ProfileInfo'

const ProfileUser = ({ data, bgImage }) => {
  const { user, isError, isLoading } = useUser(data.id + '/post?limit=3')

  if (isError) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  console.log('dataPost', user || [])

  return (
    <>
      <div className="border-b border-color pb-9 sticky top-0 z-20 bg-white">
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
        <Container>
          <div className="profile_info">
            <div className="flex sm:mr-5">
              <Avatar
                src={data.picture}
                alt={data.firstName + ' ' + data.lastName}
              />
            </div>
            <div className="mt-6 sm:flex sm:items-center sm:justify-end sm:flex-1">
              <div className="mt-6 flex-1">
                <Text variant="h1" color="900">
                  {data.firstName + ' ' + data.lastName}
                </Text>
                <Text variant="body1" color="500" transform="capitalize">
                  {data.title} Member
                </Text>
              </div>
              <div className="mt-6 flex flex-col">
                <Button variant="outline">Follow</Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/*Profile Info*/}
      <ProfileInfo data={data} />
      {/*Post section*/}
      <div className="border-t border-color py-5">
        <Container>
          <Text variant="h3">Post</Text>
          {/*Post*/}
          <div className="mt-3">
            <Grid>
              {user.data.map((item) => (
                <Post key={item.id} data={item} />
              ))}
            </Grid>
          </div>
        </Container>
      </div>
    </>
  )
}

export default ProfileUser
