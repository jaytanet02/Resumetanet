import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {

  function checkbody() {
    document.body.classList.toggle('g-sidenav-show');
    // หากมีคลาส "bg-gray-100" ใน <body> ให้ลบออก
    document.body.classList.toggle('bg-gray-100');
    // หากมีคลาส "g-sidenav-pinned" ใน <body> ให้ลบออก
    document.body.classList.toggle('g-sidenav-pinned');
 

  };

  return (
    <>

      <div class="min-height-300 bg-primary position-absolute w-100"></div>
      <aside class="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 " id="sidenav-main">
        <div class="sidenav-header">
          <i class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
          <div class="navbar-brand m-0" >
            <img src="../assets/img/i0.png" class="navbar-brand-img h-100 icon-menu" alt="main_logo" />
            <span class="ms-1 font-weight-bold"> Menu</span>
          </div>
        </div>
        <hr class="horizontal dark mt-0" />
        <div class="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/skill" class="nav-link" onClick={checkbody}>
                <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <img src="../assets/img/i1.png" class="navbar-brand-img h-120 icon-sm" alt="main_logo" />
                </div>
                <span class="nav-link-text ms-1">Skill</span>
              </Link>
            </li>
            <li class="nav-item">
              {/* เพิ่ม Link เพื่อลิ้งก์ไปยังหน้า table_user.js */}
              <Link to="/experience" class="nav-link" onClick={checkbody}>
         
                <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <img src="../assets/img/i2.png" class="navbar-brand-img h-100 icon-sm" alt="main_logo" />
                </div>
                <span class="nav-link-text ms-1">Experience</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/education" class="nav-link" onClick={checkbody}>
                <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <img src="../assets/img/i3.png" class="navbar-brand-img h-100 icon-sm" alt="main_logo" />
                </div>
                <span class="nav-link-text ms-1">Education</span>
              </Link>
            </li>

            <li class="nav-item">
              <Link to="/profile" class="nav-link" onClick={checkbody}>
                <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <img src="../assets/img/i4.png" class="navbar-brand-img h-100 icon-sm" alt="main_logo" />
                </div>
                <span class="nav-link-text ms-1">Profile | Contact</span>
              </Link>
            </li>

          </ul>
        </div>
        <div class="sidenav-footer mx-3 ">


        </div>
      </aside>

    </>
  )
}

export default Navbar
