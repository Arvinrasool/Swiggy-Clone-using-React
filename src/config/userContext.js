import { createContext } from 'react'

const UserContext = createContext({
    defaultUser: 'Myself',
})

export default UserContext;