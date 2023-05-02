import React from 'react'
import Crousals from '../Components/Crousals';
import Cards from '../Components/Cards'
import img from '../Images/photo-1607746747627-8f2311dac2bf.avif'
// import img12 from '../Images/1_8QWSI0WbbDbzHC3XQyS0oA.webp';
// import img1 from '../Images/1_t3uvff1hg9tWJIZuTBNI1Q.webp';
// import img2 from '../Images/download-removebg-preview.png';
// import img3 from '../Images/bristol.png';
// import img4 from '../Images/download (13).png';
// import img5 from '../Images/logo (1).png';
// import img6 from '../Images/logo.jpg';
// import img7 from '../Images/logowseal-RGB.png';
// import img8 from '../Images/download (5).png';
// import img9 from '../Images/download (6).png';
// import img10 from '../Images/download (7).png';
// import img11 from '../Images/download (10).png';
import img13 from '../Images/user.webp';
import img14 from '../Images/capture 12.PNG'
import img15 from '../Images/download.jpeg'
import img16 from '../Images/download (1).jpg'
import img17 from '../Images/download (2).jpg'
import img18 from '../Images/195-1953063_people-connection-svg-png-icon-free-download-hub-removebg-preview.png'
import img19 from '../Images/Testimonials-picture.png'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';
import Whatsappicon from './Whatsappicon';
import Card from 'react-bootstrap/Card';
import "../Components/index.css"


function Home() {
    return (
        <>
            <Navbar />

            <div class="container my-2"></div>
            <div className="" style={{backgroundColor:'brown', width:'100%'}} >
                <div className="row mx-5">
                    <div className="col-6 my-5">
                <h1 className='mx-5 my-5'>FLAT 50% OFF ON ALL ORDERS</h1>
                <h4 className='mx-5'>With Our Unbeatable Discounts, Access Top-Quality Assignment Tutoring Services At A Price That Works For You.</h4>
                </div>
                
                <div className="col-6 my-5">
                
                <img className='my-5' src="https://www.asignmenthelp.com/img/sale-bag.webp" class="img-fluid" alt="Responsive image" width={'50%'}/>
                </div>
            </div>
            </div>
            {/* <div class="jumbotron jumbotron-fluid" style={{ backgroundColor: '#5c616e' }}>

                <div class="container my-4">
                    <div class="row py-5">
                        <div class="col"><br /><br />
                            <h1 class="display-6" style={{ color: 'white' }}> <b> Facing Difficulties With Your <br />Online
                                Exams/Assignments?
                            </b></h1><br />
                            <p class="lead"><button type="button" style={{ borderRadius: '50px' }} class="btn btn-outline-light">
                                <b> Take A
                                    Tour</b></button></p>
                        </div>
                        <div class="col-md-auto">
                            <img className='image1' src={img} alt="" style={{
                                width: '350px'
                            }} />
                            

                        </div>
                        <div class="col col-lg-2">
                        </div>
                    </div>

                </div>    <br />
            </div> */}

            <marquee width="100%" direction="left" className="blink">
                For the solution of your homework or assignment please contac us with our official email & WhatsApp.
            </marquee>
            <div className="container my-4"> 
                <Crousals />
            </div><br /><br />
           
            <div class="container mx-4">
            </div>
            <div className="container">
            <h1 className='text-center text-dark'>Customers reviews</h1><br />    
                <Cards />
            </div>
            
            <div class="container">
                <div class="card text-center" style={{ borderColor: 'white' }}>
                    <div class="card-body">
                        <h5 class="card-title">
                            <h3> <b> Online Educational Assistance</b></h3>
                        </h5>
                    </div>
                </div>
            </div>
            <div class="container">
                <h4 style={{ margin: 'right 5px', marginRight: '100px', color: 'rgb(138, 46, 46)' }}>
                    <b> Tell Us What You Need </b>
                </h4>
                <p style={{ margin: 'left 100px', marginRight: '0px' }}>Visit our <b> website </b> and
                    provide all the details by filling up the order form. If you want <b> customized assignment </b> solutions,
                    you can talk
                    to our support team and mention your requirements.
                </p>
                <h4 style={{ margin: 'right 5px', marginRight: '100px', color: 'rgb(138, 46, 46)' }}>
                    <b> Pay For Assignment</b>
                </h4>
                <p style={{ margin: 'left 100px', marginRight: '0px' }}>Once you receive your quote, process your secure transaction
                    through credit cards, debit cards and bank transfers in an instant. Payments are <b> fast, easy and secure
                    </b> with
                    many options provided like apple pay, google pay, visa, Mastercard, discover, American express, Alipay and
                    many more.
                </p>
                <h4 style={{ margin: 'right 5px', marginRight: '100px', color: 'rgb(138, 46, 46)' }}>
                    <b>Receive Completed Solution</b>
                </h4>
                <p style={{ margin: 'left 100px', marginRight: '0px' }}>Our <b> assignment help </b> experts start writing the papers
                    as soon
                    as the payment is done. The writers work fast to complete the task within the deadline. You will receive
                    your <b> assignment </b> in your registered account prior to the submission deadline.
                </p>
            </div>
            <div class="container">
                <h1 style={{ textAlign: 'center' }}>
                    <a class="btn btn-outline-danger" href="/" role="button">Order Now</a>
                </h1>
            </div>
            {/* <div class="container my-2">
                <h1 className='text-center text-dark'>Customers reviews</h1>
                <br /><br />
                <div class="container">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div className="card">
                            <div className="col">
                                <div class="card-h20">
                                    <div class="card-body">
                                        <p class="card-text" style={{ textAlign: 'center' }}>They are the best and I rely on them for
                                            plagiarism-free, interesting, and precise English assignments. I always come back to them.
                                            The prices are budget-friendly and the results are unbeatable! Received my paper in just 3
                                            days</p>
                                        <div style={{ textAlign: 'center' }}>
                                            <source srcset="..." type="image/svg+xml" />
                                            <img src={img15} class="img-fluid img-thumbnail" alt="..." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div class="card-h20">
                                    <div class="card-body">
                                        <p class="card-text" style={{ textAlign: 'center' }}>Great service your provided. I like your
                                            genuine and responsible work.Actually I was busy some other work that's why I contact you
                                            for help and you did a great
                                            job. Thank You</p><br />
                                        <div style={{ textAlign: 'center' }}>
                                            <source srcset="..." type="image/svg+xml" />
                                            <img src={img16} class="img-fluid img-thumbnail" alt="..." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="col">
                                <div class="card-h20">
                                    <div class="card-body" style={{ textAlign: 'center' }}>
                                        <p class="card-text" >I am impressed with the assignment quality.
                                            Their professional team made sure to follow all the references I shared for my English
                                            assignment order. I received it within 48 hours. The prices are quite affordable.</p><br />
                                        <div style={{ textAlign: 'center' }}>
                                            <source srcset="..." type="image/svg+xml" />
                                            <img src={img17} class="img-fluid img-thumbnail" alt="..." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div class="container my-4">
                <div class="row">
                    <div class="col-sm" style={{ textAlign: 'center', color: 'rgb(138, 46, 46)' }}>
                        <h1>2,177,466</h1>
                        <p><b> DELIVERED ORDERS</b></p>
                    </div>
                    <div class="col-sm" style={{ textAlign: 'center', color: 'rgb(138, 46, 46)' }}>
                        <h1>5,221</h1>
                        <p><b> EXPERTS</b></p>
                    </div>
                    <div class="col-sm" style={{ textAlign: 'center', color: 'rgb(138, 46, 46)' }}>
                        <h1>4.9/5</h1>
                        <p><b> CLIENT RATING</b></p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row mx-4">
                    <div className="col">
                    <div class="card">
    
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <hr />
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
                    </div>
                    <div className="col">
                    <div class="card">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <hr />
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
                    </div>
                    <div className="col">
                    <div class="card">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      hr
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
                    </div>
                </div>
            </div>
            {/* <div>
                <h1 style={{ textAlign: 'center' }}>Strategy planning</h1>
                <p style={{ textAlign: 'center' }}>When we Get any Task or assignment we work and research on it with different
                    ways.</p>

                <div class="container">
                    <div class="card-deck">
                        <div class="card" style={{ borderColor: 'white' }}>
                            <div class="card-body">
                                <h5 style={{ textAlign: 'center' }}><b> RESEARCH</b></h5>
                                <p style={{ textAlign: 'center' }}>Creative and systematic work undertaken to increase the stock of knowledge.</p>
                            </div>
                        </div>
                        <div class="card" style={{ borderColor: 'white' }}>
                            <div class="card-body">
                                <h5 style={{ textAlign: 'center' }}> <b> COLLECT REQUIREMENT</b></h5>
                                <p style={{ textAlign: 'center' }}>A process that determines as well as documents and manages the needs and <br /> requirements of the stakeholders to  meet the objectives of the project management tasks.</p>
                            </div>
                        </div>
                        <div class="card" style={{ borderColor: 'white' }}>
                            <div class="card-body">
                                <h5 style={{ textAlign: 'center' }}> <b> DEVELOPMENT</b></h5>
                                <p style={{ textAlign: 'center' }}>A formal opportunity for an employee to develop professional knowledge, skills, <br /> and abilities that would not otherwise be available through their normal work activities.</p>
                            </div>
                        </div>
                    </div>
                </div> <br /><br />
            </div> */}
            {/* <div class="container">
                <h3 style={{ textAlign: 'center' }}>Get in touch with us!</h3>
            </div> */}
            <br />
            <div style={{ backgroundColor: 'rgb(184, 180, 180)' }}>
                <div class="container">
                    <h3 className='text-center'>Why Students from All Across The Globe Choose US?</h3>
                    <p>When it comes to assignment tutoring services, students may have many options to choose from. However, when they choose us, they can be confident that they are getting the best in the industry. We offer bespoke solutions to all their academic needs, ensuring that they receive the support they need to succeed in their academic pursuits.</p>
                    <p>One of the reasons students choose us is because of the lightning-speed delivery of our services. We understand that deadlines are crucial, and we go above and beyond to ensure that our students receive their work on time. Our team of assignment tutors is highly efficient and dedicated to providing timely delivery of asked services without sacrificing the quality of work.</p>
                    <p>We prioritize students’ satisfaction above everything else. We understand that academic success is critical to their future, and we take our responsibility seriously. We ensure that our students are happy with our work by offering unlimited live sessions with tutors, revisions in writeups until they are fully satisfied. If, for any reason, our students are not happy with our work, we offer a full refund - no questions asked.</p>
                    {/* <div class="row">
                        <div class="col-6"><br />
                            <h2>WE ARE NOT JUST <br /> ASSIGNMENT SOLVER </h2>
                            We focus on Building Relation with Peer to Peer Network
                        </div><br />
                        <div class="col"></div>
                        <div class="col"><br />
                            <img className='mx-4' src={img18} alt=""
                                width="110" />
                        </div>
                    </div> */}
                </div><br />
            </div><br /><br />
            <div class="container">
                <h3 style={{ textAlign: 'center', color: 'blue' }}>What Makes Our Reviews Trustworthy</h3>
            </div><br />
            <div class="container">
                <div class="row">
                    <div class="col">
                        <img src={img19} alt="" />
                    </div>
                    <div class="col">
                        <br /><br />
                        <p>Only real customers, who received a completed order, can leave a review.</p>

                        <p> Every feedback is based on our customers’ experience and will never be deleted.</p>


                        <p> We listen to what you say: your reviews help us to control the work of our writers.</p>
                    </div>
                </div>
            </div>
            <Footer />
            <Whatsappicon />
        </>
    )
}

export default Home
