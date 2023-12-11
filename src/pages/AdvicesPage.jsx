import React from 'react'
import Advices from '../components/home/home-section/home-header/advices/Advices'
import PageBanner from '../components/common/page-banner/PageBanner'
import Layout from '../layout/Layout'

export const AdvicesPage = () => {
  return (
    <Layout>
    <PageBanner />
  <Advices />
</Layout>
  )
}

export default AdvicesPage