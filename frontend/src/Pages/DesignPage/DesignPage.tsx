import React from 'react'
import Table from '../../Components/Table/Table'
import RatioList from '../../Components/RatioList/RatioList'
import { CompanyKeyMetrics } from '../../company'
import { testIncomeStatementData } from '../../Components/Table/TestData'

interface Props {}

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: any) => company.marketCapTTM,
    subTitle: "Total value of all a company's shares of stock",
  },
]

const DesignPage = (props: Props) => {
  return (
    <div>
        <h1>Derter Design Page</h1>
        <h2>This is Derter`s design page. This is where we will house various
            design aspects of the app
        </h2>
        <RatioList data={testIncomeStatementData} config={tableConfig}  />
        <Table data={testIncomeStatementData} config={tableConfig} />
    </div>
  )
}

export default DesignPage