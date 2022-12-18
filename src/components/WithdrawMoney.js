import React from 'react'

const WithdrawMoney = () => {
  return (
    <div>
          <div class="form-body">
        <div class="row">
            <div class="form-holder">
                <div class="form-content">
                    <div class="form-items">
                        <h3>Withdraw The Money</h3>
                        <p>Enter the amount money to Withdraw</p>
                        <form class="requires-validation" novalidate>

                            <div class="col-md-12">
                               <input class="form-control" type="text" name="name" placeholder="Amount" required></input>
                               <div class="valid-feedback">Username field is valid!</div>
                               <div class="invalid-feedback">Username field cannot be blank!</div>
                            </div>

                           <div class="col-md-12">
                                <select class="form-select mt-3" required>
                                      <option selected disabled value="">Withdraw from </option>
                                      <option value="jweb">Ajay sharma</option>
                                      <option value="sweb">Sandeep chouhan</option>
                                      <option value="pmanager">Rajiv yadav</option>
                                      <option value="jweb">Salman Khan</option>
                                      <option value="sweb">Yash Dhanush</option>
                                      <option value="pmanager">Nishant Yadav</option>
                               </select>
                                <div class="valid-feedback">You selected a position!</div>
                                <div class="invalid-feedback">Please select a position!</div>
                           </div>

                            <div class="form-button mt-3">
                                <button id="submit" type="submit"  class="btn btn-primary">Withdraw</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default WithdrawMoney;