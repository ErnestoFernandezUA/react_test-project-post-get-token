export type UserJsonplaceholder = {
  id: string,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: number,
      lng: number,
    }
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string,
  }
}

type Position = 'Security' | 'Designer' | 'Content manager' | 'Lawyer';

export type UserType = {
  id: number,
  name: string,
  email: string,
  phone: string,
  position: Position,
  position_id: number,
  registration_timestamp: number,
  photo: string,
}