import React from 'react'
import { useAuth } from './store/auth';

const AuthenticatedGuard = () => {
    const { isAuthenticated } = useAuth(); // ログイン済みかどうかのフラグ
    const location = useLocation();
  
  return (
    <div>
      
    </div>
  )
}

export default AuthenticatedGuard
