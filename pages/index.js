import useUser from '../lib/Hooks/useUser'
import Link from 'next/link'

export default function Home() {
  const { user, isLoading, isError } = useUser()

  if (isError) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  console.log('data', user || [])
  return (
    <div>
      <h1>User</h1>
      <div>
        {user.data.map((item) => (
          <div key={item.id}>
            <div>{item.firstName}</div>
            <Link href={{ pathname: '/user/[id]', query: { id: item.id } }}>
              <a>
                {item.firstName} {item.lastName}
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
