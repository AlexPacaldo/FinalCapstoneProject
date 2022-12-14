import React from 'react'
import { Link } from 'react-router-dom';
import '../css/home.css'
import plate from '../img/plate.png'
import pic1 from '../img/secondSecPic.jpg'
import pic2 from '../img/pizz.jpg'
import step1 from '../img/Step 1.png'
import step2 from '../img/Step 2.png'
import step3 from '../img/Step 3.png'
import step4 from '../img/Step 4.png'

const Home = () => {
  return (
    <div>
      {/* hero */}
          <div className='d-flex justify-content-center hero align-items-center'>

            <div className='plate mx-md-4'>
              <img src={plate} alt='plate.img'></img>
            </div>

            <div className='text-center mobileBG d-flex flex-column justify-content-center mx-md-4 p-4'>
              <h1><b>Homemade will<br></br>always taste better</b></h1>
              <p>U Cookin is a power app for people<br></br>obsessed with food and planning.</p>
              <button className='btn heroButton'><b>Join Now!</b></button>
            </div>

          </div>

      {/* secondSec */}
          <div className='secondSec text-center d-flex flex-column justify-content-center align-items-center py-4'>
            <div className='secondSecCont'>
              <h1><b>How it works</b></h1>
              <br></br>
              <div className='row row-cols-1 row-cols-md-3 gy-4 mx-1'>
                <div className='col'>
                  <div className='cards'>
                    <h3><b>Create, share, discover recipes</b></h3>
                    <p>Browse through user created recipes, or add your own recipes to U Cookin. Take advantage of categories to find what you are looking for. </p>
                  </div>
                </div>
                <div className='col'>
                  <div className='cards'>
                    <h3><b>Track expenses (coming soon)</b></h3>
                    <p>U Cookin comes with a built in price comparaison tool to help you save money, and an expense tracker to help you keep it under control.</p>
                  </div>
                </div>
                <div className='col'>
                  <div className='cards'>
                    <h3><b>Order groceries (beta)</b></h3>
                    <p>Order groceries automatically by letting us know what???s in your fridge, our automated system will then order groceries accordingly based on recipes and pax. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

      {/* thirdSec */}
          <div className='thirdSec d-flex flex-column justify-content-center py-3'>
            <h1 className='text-center'><b>Why Us?</b></h1>
            <br></br>
            <div className='row row-cols-1 row-cols-md-2 text-center text-md-start mx-1 px-1 px-sm-3 gy-5'>
              <div className='col'>
                <div>
                  <img className="thirdSecImg" src={pic2}></img>
                  <br></br><br></br>
                  <h2><b>Feel lighter</b></h2>
                  <p>Forget about the stress of planning and overspending.</p>
                </div>
              </div>
              <div className='col'>
                <div>
                  <img className="thirdSecImg" src={pic1}></img>
                  <br></br><br></br>
                  <h2><b>New life skills</b></h2>
                  <p>Learn to cook and control your spending habits with our recipes and expense tracker tool</p>
                </div>
              </div>
            </div>
          </div>

      {/* fourthSec */}
          <div className='fourthSec d-flex flex-column justify-content-center py-5'>
            <h1 className='text-center'><b>As easy as one two three, </b></h1>
            <br></br>

            <div className='row row-cols-1 row-cols-md-2 mx-1 gy-2 text-center '>
              {/* Step1 */}
              <div className='col d-flex justify-content-center justify-content-md-end'>
                <div>
                  <img className='fourthSecImg' src={step1}></img>
                </div>
              </div>
              <div className='col d-flex align-items-center justify-content-center justify-content-md-start'>
                <div>
                  <h2><b>Step 1</b></h2>
                  <p>Create a recipe or find a recipe you want<br></br>to try from our user created selection</p>
                </div>
              </div>

              {/* Step2 */}
              <div className='col d-none d-md-flex align-items-center justify-content-center justify-content-md-end'>
                <div>
                  <h2><b>Step 2</b></h2>
                  <p>Add the recipe to the cart </p>
                </div>
              </div>

              <div className='col d-flex justify-content-center justify-content-md-start'>
                <div>
                  <img className='fourthSecImg' src={step2}></img>
                </div>
              </div>
              {/* mobileview */}
              <div className='col d-flex d-md-none align-items-center justify-content-center'>
                <div>
                  <h2><b>Step 2</b></h2>
                  <p>Add the recipe to the cart </p>
                </div>
              </div>

              {/* Step3 */}
              <div className='col d-flex justify-content-center justify-content-md-end'>
                <div>
                  <img className='fourthSecImg' src={step3}></img>
                </div>
              </div>
              <div className='col d-flex align-items-center justify-content-center justify-content-md-start'>
                <div>
                  <h2><b>Step 3</b></h2>
                  <p>Select pax individually or for all recipes</p>
                </div>
              </div>
              
              {/* Step4 */}
              <div className='col d-none d-md-flex align-items-center justify-content-end'>
                  <div>
                    <h2><b>Step 4</b></h2>
                    <p>Generate a grocery list </p>
                  </div>
                </div>

                <div className='col d-flex justify-content-center justify-content-md-start'>
                  <div>
                    <img className='fourthSecImg' src={step4}></img>
                  </div>
                </div>

                <div className='col d-flex d-md-none align-items-center justify-content-center'>
                  <div>
                    <h2><b>Step 4</b></h2>
                    <p>Generate a grocery list </p>
                  </div>
                </div>
              </div>
          </div>

    </div>
  )
}

export default Home