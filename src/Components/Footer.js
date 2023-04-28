import React from 'react'
import { Link } from 'react-router-dom';
import img from '../Images/logo3.png';
import img1 from '../Images/Capture.PNG'
import img2 from '../Images/Capture1.PNG'
import img3 from '../Images/Capture2.PNG'
function Footer() {
    return (
        <>
            <div class="container">
                <div class="elementor-widget-container">
                    <hr style={{ height: '1px', border: 'none', color: '#000', backgroundColor: '#000' }} />
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col"> <Link to="/Home"> <img
                        src={img} alt=""
                        style={{ width: '200px' }} /></Link></div>
                    <div class="col">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <h1 style={{ color: 'rgb(138, 46, 46)' }}> <b> Discover </b> </h1>
                                <Link class="nav-link" to="/Services"> <b> Services</b></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Reviews"> <b> Review</b></Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link" to="/Contact-us"> <b> Contact-us</b></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Experts"> <b> Experts</b></Link>
                            </li>
                        </ul>
                    </div>
                    <div class="col">
                        <h1 style={{ color: 'rgb(138, 46, 46)' }}><b>Contact</b></h1>
                        <h4><img src={img1} alt="" /><Link to="tel:+15645446567" >+ 1 564-544-6567
                        </Link></h4>
                        <h4><img src={img2} alt="" /><Link to="https://chatwith.io/s/642c1d420fe9d" target="_blank"
                            rel="noreferrer">+ 1 564-544-6567
                        </Link></h4>
                        <h4 className='d-flex'><img src={img3} alt="" /> <Link to="mailto:support@asignmenthelps.com"
                        >support@asignmenthelps.com
                        </Link></h4>

                    </div>
                    <div class="col">
                        <h1 style={{ color: 'rgb(138, 46, 46)' }}> <b> Newsletter</b></h1>
                        <form>
                            <div class="form-group row">

                                <div class="col-sm-10">
                                    <h5>Email address:</h5>
                                    <input type="password" class="form-control" id="inputPassword" placeholder="Email" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-10">
                                    <input type="password" class="form-control" id="inputPassword" placeholder="Password" />
                                </div>
                            </div> <br />
                            <input class="btn btn-danger" type="submit" value="Subscribe" />
                        </form>
                    </div>
                </div>

            </div>
            <br />
        </>
    )
}

export default Footer
