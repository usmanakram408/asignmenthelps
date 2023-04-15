import React from 'react'
import img from '../Images/Mesa-de-trabajo-1.png'
import img1 from '../Images/ava1.png'
import img2 from '../Images/ava2.png'
import img3 from '../Images/ava4.png'
import img4 from '../Images/y10.png'
import img5 from '../Images/y11.png'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
    

function Experts() {
  return (
   <>
    <Navbar/>
    <div class="jumbotron jumbotron-fluid" style={{backgroundColor: 'rgb(138, 46, 46)'}}>
        <div class="container my-2">
            <div class="row">
                <div class="col-9">
                    <div class="container my-lg-5"></div>
                    <h1 style={{color: 'white'}}> <b> Meet With Our Expert Team
                        Professionals in their Field
                        </b></h1>
                </div>
                <div class="col">
                    <img src={img} class="img-fluid" alt="..."/>
                    
                </div>
            </div>
        </div>
    </div>
    <br/><br/>
    <div class="container">
        
        <div class="row" >
                <div class="col"><img src={img1} class="img-fluid" alt="..." width="25%"/>
                    <img src={img2} class="img-fluid" alt="..." width="25%"/>
                    <img src={img3} class="img-fluid" alt="..." width="25%"/><br/>
                    <img src={img4} class="img-fluid" alt="..." width="25%"/>
                    <img src={img5} class="img-fluid" alt="..." width="25%"/></div>
                    
                    <div class="col">
                        <div class="container my-lg-5">
                            <p class="text-sm-left">THE TEAM</p>
                            <h1><b> Our creative team</b></h1>
                        </div>
                    </div>
            </div>
            <div class="row" >
                <div class="col"></div>
            </div>
            
    </div>
    <Footer/>
   </>
  )
}

export default Experts
