import React from 'react'

const Transaction = () => {
  return (
    <div>
      <h3>Transactions-List</h3>
        <table class="table">
  <thead >
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Account</th>
      <th scope="col">Status</th>
      <th scope="col">Amount</th>
      <th scope="col">Balance</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr>
      <th scope="row">1</th>
      <td>Ajay sharma</td>
      <td>156789</td>
      <td>Debit</td>
      <td>2800</td>
      <td>7300</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Sandep chouhan</td>
      <td>31267891</td>
      <td>Credit</td>
      <td>2000</td>
      <td>12000</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Ajay sharma</td>
      <td>121278912</td>
      <td>Debit</td>
      <td>1500</td>
      <td>9500</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Salman Khan</td>
      <td>456789123</td>
      <td>Credit</td>
      <td>10500</td>
      <td>10300</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Shreyansh Dhyani</td>
      <td>93431234</td>
      <td>Credit</td>
      <td>600</td>
      <td>10000</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>rajiv Yadav</td>
      <td>678912345</td>
      <td>Credit</td>
      <td>10600</td>
      <td>12300</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Transaction;