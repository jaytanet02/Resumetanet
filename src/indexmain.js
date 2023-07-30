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


        </main>
      </body>

    </>


  )
}
