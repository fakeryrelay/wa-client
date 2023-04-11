import { Layout } from "../../layout/Layout"
import { useAuth } from './../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const NotFound = () => {
  const {isAuth} = useAuth()

  const nav = useNavigate()

  useEffect(() => {
    if(!isAuth) nav('/auth')
  })

  return (
    <>
      <Layout heading="Page not found!" />
      <div className="wrapper-inner-page">
        404 page not found
      </div>
    </>
  )
  
}