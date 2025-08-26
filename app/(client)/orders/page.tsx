import { RequiredUser } from '@/hooks/required-user'
import React from 'react'

const OrdersPage = async() => {
  await RequiredUser()
  return (
    <div>
      
    </div>
  )
}

export default OrdersPage
