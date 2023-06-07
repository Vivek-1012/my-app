import React from 'react'

import { Navigate, useLocation } from 'react-router-dom'

export const RequireAuth = ({children}) => {
    
    const location = useLocation()
    return(
   localStorage.getItem("token")?children:<Navigate to="/SignIn" state={{from: location}}/>
)
}

