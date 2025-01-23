import React from 'react'
import { OrderSuccess } from './components/OrderSuccess';
import { OrderFail } from './components/OrderFail';
import { useLocation } from 'react-router-dom';
import { useTitle } from '../../hooks/useTitle';

export const OrderPage = () => {
  //const state = useLocation();

  //console.log(state.status);
  //const state = location.state || { data: null, status: false };
  useTitle("Order Summary")
  const location = useLocation();
  const state = location.state || { data: null, status: false }; // Fallback for null state

  return (
    <main>
      {state.status ? <OrderSuccess data={state.data}/> : <OrderFail />}
    </main>
  )
}
