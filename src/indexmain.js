import React from 'react';
import Navbar from "./Navbar";

export default function indexmain() {

  function checkbody() {
    document.body.classList.toggle('g-sidenav-show');
    // หากมีคลาส "bg-gray-100" ใน <body> ให้ลบออก
    document.body.classList.toggle('bg-gray-100');
    // หากมีคลาส "g-sidenav-pinned" ใน <body> ให้ลบออก
    document.body.classList.toggle('g-sidenav-pinned');
    const element = document.getElementById('indexhidden');

    element.hidden = true;

  };


  return (

    <>
      <body class="g-sidenav-show   bg-gray-100" >

        <Navbar />
        <main class="main-content position-relative border-radius-lg ">



          <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4  border-radius-xl " id="navbarBlur" data-scroll="false">
            <div class="container-fluid py-1 px-3">
              <nav aria-label="breadcrumb">

                <h6 class="font-weight-bolder text-white mb-0">Tanet Limsumangkolkul (Jay)</h6>
              </nav>
              <div class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                <div class="ms-md-auto pe-md-3 d-flex align-items-center">

                </div>
                <ul class="navbar-nav  justify-content-end">
                  <li class="nav-item d-flex align-items-center">

                  </li>
                  <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
                    <a href="#a" class="nav-link text-white p-0" onClick={checkbody}>

                      <div class="sidenav-toggler-inner">
                        <i class="sidenav-toggler-line bg-white"></i>
                        <i class="sidenav-toggler-line bg-white"></i>
                        <i class="sidenav-toggler-line bg-white"></i>
                      </div>
                    </a>
                  </li>
                  <li class="nav-item px-3 d-flex align-items-center">

                  </li>
                  <li class="nav-item dropdown pe-2 d-flex align-items-center">


                  </li>
                </ul>
              </div>
            </div>
          </nav>


          <div class="container-fluid py-4" id="indexhidden" >
            <div class="row">
              <div class="col-12">
                <div class="card mb-4">
                  <div class="card-header pb-1 mx-4">
                    <h6>PROFILE </h6>
                  </div>
                  <div class="card-body px-0 pt-0 pb-2">
                    <div class="table-responsive p-0">
                      <table class="table align-items-center mb-2" border={1}>
                        <thead>
                          <tr>
                            <th class="text-uppercase text-secondary text-x font-weight-bolder opacity-7"></th>
                            <th class="text-center text-uppercase text-secondary text-x font-weight-bolder opacity-7">Description</th>
                            <th class="text-center text-uppercase text-secondary text-x font-weight-bolder opacity-7">Position</th>

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
                              <div class="d-flex px-2 py-1">
                                <div>
                                  <img src="../assets/img/jay.jpg" class="avatar custom-lg-size mx-3" style={{ width: '250px', height: '250px' }} alt="user1" />
                                </div>

                              </div>
                            </td>

                            <td>
                              <div class="d-flex flex-column justify-content-center">
                                <h6 class="mx-4 ml-3 text-x">My major is Information System with experience<br />
                                  in project, internship, activities, leaned in university<br />
                                  and work. That gave me skills in work experience,<br />
                                  communication teamwork and coding skill. I can<br />
                                  apply my education and skills to software development.</h6>
                              </div>
                            </td>

                            <td>
                              <div class="d-flex flex-column justify-content-center">
                                <h6 class="mx-4 ml-3 text-x">
                                  Interested in the backend developer</h6>
                              </div>
                            </td>
                          </tr>





                        </tbody>
                      </table>

                      <div class="card-header pb-1 mx-4">
                        <h6>CONTACT </h6>
                      </div>
                      <table class="table align-items-center mb-5" border={1}>
                        <thead>
                          <tr>
                            <th class="text-center text-uppercase text-secondary text-x font-weight-bolder opacity-7">Tel</th>
                            <th class="text-center text-uppercase text-secondary text-x font-weight-bolder opacity-7">E-mail</th>
                            <th class="text-center text-uppercase text-secondary text-x font-weight-bolder opacity-7">Adress</th>

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
                              <div class="d-flex px-2 py-1">
                                <div>
                                <h6 class="mx-4 ml-3 text-x">
                                  <img src="../assets/img/c7.jpg" class="avatar custom-lg-size mx-3" alt="user1" />
                                  0982846992</h6>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="d-flex px-2 py-1">
                                <div>
                                <h6 class="mx-4 ml-3 text-x">
                                  <img src="../assets/img/c8.png" class="avatar custom-lg-size mx-3" alt="user1" />
                                  jaytanet@gmail.com</h6>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="d-flex px-2 py-1">
                                <div>
                                <h6 class="mx-4 ml-3 text-x">
                                  <img src="../assets/img/c9.jpg" class="avatar custom-lg-size mx-3" alt="user1" />
                                  56 road rama2 alley 51
                                  Subdistrictthakam
                                  District Bang Khun Thian
                                  Bangkok 10150</h6>
                                </div>
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
