import Avatar from '@/components/UI/Avatar/Avatar'
import Container from '@/components/UI/Container/Container'
import Grid from '@/components/UI/Grid/Grid'
import Skeleton from '@/components/UI/Skeleton/Skeleton'
import useUser from '@/lib/Hooks/useUser'
import Link from 'next/link'

export default function Home() {
  const { user, isLoading, isError } = useUser()

  if (isError) return <div>failed to load</div>
  if (isLoading)
    return (
      <Container>
        <div className="py-5">
          <Grid variant="gridB">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <Skeleton key={item} variant="avatar" />
            ))}
          </Grid>
        </div>
      </Container>
    )
  console.log('data', user || [])
  return (
    <div>
      <Container>
        <div className="py-5">
          <Grid variant="gridB">
            {user.data.map((item) => (
              <Link
                key={item.id}
                href={{ pathname: '/user/[id]', query: { id: item.id } }}
              >
                <a>
                  <Avatar
                    src={item.picture}
                    alt={item.firstName + ' ' + item.lastName}
                  />
                </a>
              </Link>
            ))}
          </Grid>
        </div>

        {/*{user.data.map((item) => (
          <div key={item.id}>
            <div>{item.firstName}</div>
            <Link href={{ pathname: '/user/[id]', query: { id: item.id } }}>
              <a>
                {item.firstName} {item.lastName}
              </a>
            </Link>
          </div>
        ))}*/}
      </Container>
    </div>
  )
}
