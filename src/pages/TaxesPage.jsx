import React from 'react'
import Layout from '../layout/Layout'
import PageBanner from '../components/common/page-banner/PageBanner'
import Taxes from '../components/home/home-section/home-header/taxes/Taxes'

const TaxesPage = () => {
  return (
    <Layout>
    <PageBanner />
    <Taxes />
  </Layout>
  )
}

export default TaxesPage