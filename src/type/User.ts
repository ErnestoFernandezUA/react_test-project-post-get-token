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