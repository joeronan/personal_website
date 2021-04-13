import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import LineChart from "../components/line-chart"

const UpmGraphWindow = ({ activeConstituency }) => {
  const data = useStaticQuery(graphql`
    query {
    allTestDataCsv {
      edges {
        node {
          index
          value
        }
      }
    }
  }
  `)

  return (
    <div style={{ width: '50%', position: 'absolute', left: 0 }}>
      <p>Selected: {activeConstituency.join(' | ')}</p>

      <LineChart data={data} />
    </div>
  )
}

export default UpmGraphWindow
