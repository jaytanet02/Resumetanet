import React from 'react'
import Navbar from "./Navbar";
function profile() {


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
                                                        <th class="text-center text-uppercase text-secondary text-x font-weight-bolder opacity-7">PROFILE</th>
                                                        <th class="text-center text-uppercase text-secondary text-x font-weight-bolder opacity-7">Description</th>
                                                        <th class="text-center text-uppercase text-secondary text-x font-weight-bolder opacity-7">Interested in the position</th>

                                                        <th colspan="3"></th>





                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td style={{ width: '80px' }}>

                                                            <center>
                                                                <img src="../assets/img/jay.jpg" class="avatar custom-lg-size mx-3" style={{ width: '250px', height: '250px' }} alt="user1" />
                                                            </center>
                                                        </td>

                                                        <td style={{ width: '80px' }}>
                                                            <div class="d-flex flex-column justify-content-center">
                                                                <h6 class="mx-4 ml-3 text-x">My major is Information System with experience<br />
                                                                    in project, internship, activities, leaned in university<br />
                                                                    and work. That gave me skills in work experience,<br />
                                                                    communication teamwork and coding skill. I can<br />
                                                                    apply my education and skills to software development.</h6>
                                                            </div>
                                                        </td>

                                                        <td style={{ width: '80px' }}>
                                                            <div class="d-flex flex-column justify-content-center">
                                                                <h6 class="mx-4 ml-3 text-x">
                                                                    Interested in the backend developer</h6>
                                                            </div>
                                                        </td>
                                                        <td colspan="3"></td>
                                                        
                                                    </tr>


               
                                        
                                              
                                                    <tr>
                                                        <th class="text-center text-uppercase text-secondary text-x font-weight-bolder opacity-7">Tel</th>
                                                        <th class="text-center text-uppercase text-secondary text-x font-weight-bolder opacity-7">E-mail</th>
                                                        <th class="text-center text-uppercase text-secondary text-x font-weight-bolder opacity-7">Adress</th>

                                                        <th colspan="3"></th>


                                                    </tr>
                                       
                                             
                                                    <tr>
                                                        <td style={{ width: '80px' }}>
                                                            <div class="d-flex px-2 py-1">
                                                                <div>
                                                                    <h6 class="mx-4 ml-3 text-x">
                                                                        <img src="../assets/img/c7.jpg" class="avatar custom-lg-size mx-3" alt="user1" />
                                                                        0982846992</h6>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td style={{ width: '80px' }}>
                                                            <div class="d-flex px-2 py-1">
                                                                <div>
                                                                    <h6 class="mx-4 ml-3 text-x">
                                                                        <img src="../assets/img/c8.png" class="avatar custom-lg-size mx-3" alt="user1" />
                                                                        jaytanet@gmail.com</h6>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td style={{ width: '80px' }}>
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
                                                        <td></td>
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

export default profile

