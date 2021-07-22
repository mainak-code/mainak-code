import React, { Component } from 'react'

import { JSONToHTMLTable } from '@kevincobain2000/json-to-html-table'

class Example extends Component {
  render () {
    const data = {
      "id": "0001",
      "type": "donut",
      "name": "Cake",
      "ppu": 0.55,
      "batters":
        {
          "batter":
            [
              { "id": "1001", "type": "Regular" },
              { "id": "1002", "type": "Chocolate" },
              { "id": "1003", "type": "Blueberry" },
              { "id": "1004", "type": "Devil's Food" }
            ]
        },
      "topping":
        [
          { "id": "5001", "type": "None" },
          { "id": "5002", "type": "Glazed" },
          { "id": "5005", "type": "Sugar" },
          { "id": "5007", "type": "Powdered Sugar" },
          { "id": "5006", "type": "Chocolate with Sprinkles" },
          { "id": "5003", "type": "Chocolate" },
          { "id": "5004", "type": "Maple" }
        ]
    }
    return (
      <JSONToHTMLTable data={data} tableClassName="table table-sm"/>
    )
  }
  const JSONToHTMLTable = (props) => {
  const { data } = props
  return (
    <div>
      <table className="table table-bordered table-condensed table-sm">
        <tbody>
          {Object.keys(data).map((k) => (
            <tr key={k}>
              {!Array.isArray(data) && 
              <td className="font-weight-bold bg-light text-uppercase" width="20%">
                  {/* Convert snake to space and capitalize for visual */}
                  {k.replace(/_/g, ' ')}
               </td>
               }
              {(() => {
                if (data[k] && typeof data[k] === 'object') {
                  return (
                    <td width="80%">
                      <JSONToHTMLTable data={data[k]} />
                    </td>
                  )
                }
                return (
                  <td width="80%">
                      {data[k]}
                  </td>
                )
              })()}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
}
