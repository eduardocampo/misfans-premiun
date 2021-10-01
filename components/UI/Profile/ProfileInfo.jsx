import React from 'react'
import Container from '../Container/Container'
import Grid from '../Grid/Grid'
import Text from '../Text/Text'

const ProfileInfo = ({ data }) => {
  return (
    <div className="pb-4">
      <div className="py-5">
        <Container>
          <Text variant="h3">Location</Text>
          <Text variant="body1" color="500">
            {data.location.country} - {data.location.city}
          </Text>
        </Container>
      </div>
      <div className="border-t border-color py-5">
        <Container>
          <Grid>
            <div className="sm:col-span-1">
              <Text variant="body1" color="500">
                Full Name
              </Text>
              <Text variant="body2" color="900" transform="capitalize">
                {data.firstName + ' ' + data.lastName}
              </Text>
            </div>
            <div className="sm:col-span-1">
              <Text variant="body1" color="500">
                Gender
              </Text>
              <Text variant="body2" color="900" transform="capitalize">
                {data.gender}
              </Text>
            </div>
            <div className="sm:col-span-1">
              <Text variant="body1" color="500">
                Email
              </Text>
              <Text variant="body2" color="900" transform="capitalize">
                {data.email}
              </Text>
            </div>
            <div className="sm:col-span-1">
              <Text variant="body1" color="500">
                Member
              </Text>
              <Text variant="body2" color="900" transform="capitalize">
                {data.title}
              </Text>
            </div>

            <div className="sm:col-span-1">
              <Text variant="body1" color="500">
                About
              </Text>
              <Text variant="body2">
                Hi, i am {data.firstName} {data.lastName} from{' '}
                {data.location.country} i want to recommend Eduardo Campos for
                this position of Frontend Developer
              </Text>
            </div>
          </Grid>
        </Container>
      </div>
    </div>
  )
}
export default ProfileInfo
