import React from 'react'
import img from '../Images/contact-us-3483604-2912020.webp';
import img1 from '../Images/whatsapp-2317203__340.webp';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';

function Contactus() {
  return (
    <>
      <Navbar />
      <div class="container my-2"></div>
      <div class="jumbotron jumbotron-fluid" style={{ backgroundColor: 'rgb(138, 46, 46)' }}>
        <div class="container my-2">
          <div class="row">
            <div class="col-9">
              <div class="container my-lg-5"></div>
              <h1 style={{ color: 'white' }}> <b> Contact Us With Our Professional!

              </b></h1>
            </div>
            <div class="col">
              <img src={img} class="img-fluid" alt="..." />
            </div>
          </div>
        </div>
      </div><br />
      <div class="container my-2" style={{ textAlign: 'center' }}>
        <h1><b> Contact Us</b></h1><br />
        <p class="text-left">Get in touch and a member of Tech Solutions Pro will always be here and happy to help.
          Feel free to contact us by Facebook, Instagram or by email and we will be sure to get back to you as
          soon as possible. We are one click away.</p>
      </div>
      <div class="container my-2 ">
        <div class="row">
          <div class="col">
            <form>
              <div class="form-group">
                <label for="exampleFormControlInput1">Name</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="e.g john" />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1"
                  placeholder="e.g @example.com" />
              </div>
              <div class="form-group">
                <label for="exampleFormControlSelect1">Your Task</label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>Assignment</option>
                  <option>Paper</option>
                  <option>Quiz</option>
                </select>
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Phone</label>
                <input type="email" class="form-control" id="exampleFormControlInput1"
                  placeholder="e.g +12345678" />
              </div>

              <form method="post">
                <div class="form-group">
                  <label class="control-label" for="date">Deadline</label>
                  <input class="form-control" id="date" name="date" placeholder="MM/DD/YYY" type="text" />
                </div>
              </form>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">About Your Task</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div class="form-group">
                <button class="btn btn-danger" name="submit" type="submit">Submit</button>
              </div>
            </form>
          </div>
          <div class="col" >
            <a href="https://chatwith.io/s/642c1d420fe9d" target="_blank" title="" rel="noreferrer"><img src={img1} class="img-responsive"/></a>
          </div>
        </div>

      </div>
      <Footer/>
    </>
  )
}

export default Contactus
