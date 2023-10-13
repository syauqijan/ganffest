import { useSession } from 'next-auth/react'
import React from 'react'

const ProfilePage = () => {
    const { data } : any = useSession()

  return (
    <div>
        <h1>Profile Page</h1>
        <h2>
            {data && data.user.name}{''}
        </h2>
    </div>
    
  )
}

export default ProfilePage