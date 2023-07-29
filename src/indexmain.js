import React from 'react';
import Navbar from "./Navbar";

export default function indexmain() {

  function checkbody() {
    document.body.classList.toggle('g-sidenav-show');
    // หากมีคลาส "bg-gray-100" ใน <body> ให้ลบออก
    document.body.classList.toggle('bg-gray-100');
    // หากมีคลาส "g-sidenav-pinned" ใน <body> ให้ลบออก
    document.body.classList.toggle('g-sidenav-pinned');


  };


  return (

    <>
      <body class="g-sidenav-show   bg-gray-100" >

        <Navbar />
        <main class="main-content position-relative border-radius-lg ">



          <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl " id="navbarBlur" data-scroll="false">
            <div class="container-fluid py-1 px-3">
              <nav aria-label="breadcrumb">

                <h6 class="font-weight-bolder text-white mb-0">Dashboard</h6>
              </nav>
              <div class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                <div class="ms-md-auto pe-md-3 d-flex align-items-center">
                  <div class="input-group">
                    <span class="input-group-text text-body"><i class="fas fa-search" aria-hidden="true"></i></span>
                    <input type="text" class="form-control" placeholder="Type here..." />
                  </div>
                </div>
                <ul class="navbar-nav  justify-content-end">
                  <li class="nav-item d-flex align-items-center">
                    <a href="#a" class="nav-link text-white font-weight-bold px-0">
                      <i class="fa fa-user me-sm-1"></i>
                      <span class="d-sm-inline d-none">Sign In</span>
                    </a>
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
                    <a href="#a" class="nav-link text-white p-0">
                      <i class="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i>
                    </a>
                  </li>
                  <li class="nav-item dropdown pe-2 d-flex align-items-center">
                    <a href="#a" class="nav-link text-white p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="fa fa-bell cursor-pointer"></i>
                    </a>
                    <ul class="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
                      <li class="mb-2">
                        <a class="dropdown-item border-radius-md" href="#a">
                          <div class="d-flex py-1">
                            <div class="my-auto">

                            </div>
                            <div class="d-flex flex-column justify-content-center">
                              <h6 class="text-sm font-weight-normal mb-1">
                                <span class="font-weight-bold">New message</span> from Laur
                              </h6>
                              <p class="text-xs text-secondary mb-0">
                                <i class="fa fa-clock me-1"></i>
                                13 minutes ago
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li class="mb-2">
                        <a class="dropdown-item border-radius-md" href="#a">
                          <div class="d-flex py-1">
                            <div class="my-auto">

                            </div>
                            <div class="d-flex flex-column justify-content-center">
                              <h6 class="text-sm font-weight-normal mb-1">
                                <span class="font-weight-bold">New album</span> by Travis Scott
                              </h6>
                              <p class="text-xs text-secondary mb-0">
                                <i class="fa fa-clock me-1"></i>
                                1 day
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>

                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </main>
      </body>

    </>


  )
}
