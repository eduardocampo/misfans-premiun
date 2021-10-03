import Link from 'next/link'
import Avatar from '../Avatar/Avatar'
import Button from '../Button/Button'
import Container from '../Container/Container'
import Text from '../Text/Text'

export default function CardProfile({ data }) {
  return (
    <div className="shadow py-8 rounded-md bg-gray-50">
      <Container variant="xl">
        <Link href={{ pathname: '/user/[id]', query: { id: data.id } }}>
          <a>
            <div className="flex flex-col text-center">
              <div className="flex-shrink-0 mx-auto">
                <Avatar
                  src={data.picture}
                  alt={data.firstName + ' ' + data.lastName}
                />
              </div>
              <div className="mt-6">
                <Text variant="body1" color="500">
                  {data.firstName} {data.lastName}
                </Text>
                <Text variant="body2" color="900" transform="capitalize">
                  {data.title} Member
                </Text>
              </div>
            </div>
          </a>
        </Link>
        <Link href={{ pathname: '/user/[id]', query: { id: data.id } }}>
          <a>
            <div className="flex mt-6 flex-col">
              <Button variant="outline">Follow</Button>
            </div>
          </a>
        </Link>
      </Container>
    </div>
  )
}
