import { isAuthenticated } from '@/lib/actions/auth.action';
import { redirect } from 'next/navigation';
import React, {ReactNode} from 'react'

// This component will render its children ( sign-in or sign-up pages), 
// since each is an individual page, the type is ReactNode.
const AuthLayout = async ({children}: {children: ReactNode}) => {
    const isUserAuthenticated = await isAuthenticated();
    if(isUserAuthenticated) redirect('/');
  return (
    <div className='auth-layout'>{children}</div>
  )
}

export default AuthLayout