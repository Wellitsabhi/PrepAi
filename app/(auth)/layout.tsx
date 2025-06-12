import React, {ReactNode} from 'react'

// This component will render its children ( sign-in or sign-up pages), 
// since each is an individual page, the type is ReactNode.
const AuthLayout = ({children}: {children: ReactNode}) => {
  return (
    <div className='auth-layout'>{children}</div>
  )
}

export default AuthLayout