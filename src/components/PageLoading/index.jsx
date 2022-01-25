import React from 'react'
import { Spinner } from '@chakra-ui/react'
import './PageLoading.css'

export default () => (
  <div className="splash">
    <div className="inner">
      <Spinner size="lg" />
      <span>Xin vui lòng chờ!</span>
    </div>
  </div>
)
