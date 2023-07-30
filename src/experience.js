import React from 'react'
import Navbar from "./Navbar";
function dashboard() {

  return (
    <>
      <body class="g-sidenav-show   bg-gray-100">
        <Navbar />
        <main class="main-content position-relative border-radius-lg ">



          <div class="container-fluid py-4"  >
            <div class="row">
              <div class="col-12">
                <div class="card mb-4">

                  <div class="card-body px-0 pt-0 pb-2">
                    <div class="table-responsive p-0">
                      <table class="table align-items-center mb-2" >
                        <thead>
                         


                          <tr>
                            <th class="text-left text-uppercase text-secondary text-x font-weight-bolder opacity-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              Position | Company
                            </th>

                            <th class="text-left text-uppercase text-secondary text-x font-weight-bolder opacity-7">
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              Description</th>

                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>


                          </tr>
                        </thead>
                        <tbody>
                          <tr>

                          
                            <td>
                              <div class="d-flex flex-column justify-content-center align-top" >
                                <h6 class="mx-4 ml-3 text-x">Programmer | Bizpotential co. ltd <br/>(Mar 2022 - Nov 2022)  </h6>
                              </div>
                            </td>

                            <td>
                              <div class="d-flex flex-column justify-content-center">
                                <h6 class="mx-4 ml-3 text-x">
                                  - The systems that I am responsible for are CRA ERP EDU (MA)<br/>
                                  is an educational system of Chulabhorn Royal Academy ,<br/>
                                  MUIC (MA) is the educational system of Mahidol University,<br/>
                                  TSRI_HR which is a welfare system for the Thailand Science<br/>
                                  Research and Innovation , MRTA_HR a welfare system for the<br/>
                                  Mass Rapid Transit Authority of Thailand. My responsibilities<br/>
                                  include adding new functions or modifying the systems<br/>
                                  according to customer requirements , Send up email<br/>
                                  notifications in various formats, creating functions to import<br/>
                                  data from Excel to the database, and generating Word files in<br/>
                                  different formats.</h6>
                              </div>
                            </td>
                            <td colspan ="12"> </td>
                          </tr>
                          <tr>


                            <td>
                              <div class="d-flex flex-column justify-content-center">
                                <h6 class="mx-4 ml-3 text-x">QA/Tester | Sabuy infrastructure co. ltd<br/> (April 2023 - July 2023)</h6>
                              </div>
                            </td>

                            <td>
                              <div class="d-flex flex-column justify-content-center">
                                <h6 class="mx-4 ml-3 text-x">
                                  -  I have written test cases to test websites, SBM Wallet,
                                  KEX Wallet, Sabuy Wash application and vending machine.<br/>
                                  -  Write test results and Write down the found defect.<br/>
                                  -  Report results and prepare documents for the next test.
                                </h6>
                              </div>
                            </td>
                          </tr>





                        </tbody>
                      </table>



                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </>
  )
}

export default dashboard
