import { useTable } from '@refinedev/core';
import React from 'react'

const DealsChart = () => {
  return (
    <div>DealsChart</div>
  )
}

export default DealsChart


const { data } = useTable({
  resource: "activities",
  pagination: {
      current: 1,
      pageSize: 5,
  },
});