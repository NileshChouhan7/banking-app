import React from 'react';
import { Link } from 'react-router-dom';

const Customers = () => {
  return (
    <div>
      <h3>Customers-List</h3>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Account Number</th>
            <th scope="col">Add Money</th>
            <th scope="col">Withdraw</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr>
            <th scope="row">1</th>
            <td>piyush Dubey</td>
            <td>8896789</td>
            <td><Link to="/credit"><button type="button" class="btn btn-primary" >ADD</button></Link></td>
            <td><Link to="/withdraw"><button type="button" class="btn btn-primary">Withdraw</button></Link></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Sandeep chouhan</td>
            <td>534567891</td>
            <td><Link to="/credit"><button type="button" class="btn btn-primary">ADD</button></Link></td>
            <td><Link to="/withdraw"><button type="button" class="btn btn-primary">Withdraw</button></Link></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Ajay sharma</td>
            <td>11245672</td>
            <td><Link to="/credit"><button type="button" class="btn btn-primary">ADD</button></Link></td>
            <td><Link to="/withdraw"><button type="button" class="btn btn-primary">Withdraw</button></Link></td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>ajeet dev</td>
            <td>912467463</td>
            <td><Link to="/credit"><button type="button" class="btn btn-primary">ADD</button></Link></td>
            <td><Link to="/withdraw"><button type="button" class="btn btn-primary">Withdraw</button></Link></td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>yash Dhanush</td>
            <td>123467997</td>
            <td><Link to="/credit"><button type="button" class="btn btn-primary">ADD</button></Link></td>
            <td><Link to="/withdraw"><button type="button" class="btn btn-primary">Withdraw</button></Link></td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>nishant Yadav</td>
            <td>678912345</td>
            <td><Link to="/credit"><button type="button" class="btn btn-primary">ADD</button></Link></td>
            <td><Link to="/withdraw"><button type="button" class="btn btn-primary">Withdraw</button></Link></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Customers; 