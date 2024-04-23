import React from 'react';
import Navbar from './navbar';
import Prediction_Page from './Prediction';
import Buy_Page from './Buy_page';
import Contact from './Contact';
import Card from './card';

function Home_Page() {
  return (
    <>
    <Navbar/>
    {/* <Prediction_Page/>
    <Buy_Page/>
    <Contact/> */}
    <Card/>
    <div className='pt-32'>
      <h1 className='font-montserrat italic'>HI this is a Home page</h1>
      <p className='text-1xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magnam at enim nesciunt suscipit necessitatibus, ipsum amet eos laboriosam aspernatur nostrum distinctio ad modi quisquam quia asperiores, ea hic error esse inventore. Cumque, ab assumenda enim iure eveniet amet nemo ducimus vitae dolore rerum numquam ipsa perferendis magni aut maiores maxime odio temporibus cum? Adipisci deleniti quam saepe fuga architecto ipsam delectus laborum eos quibusdam autem, officiis eaque modi, ipsa culpa unde quae vel praesentium veniam est non odio enim maxime qui provident! Ut, ducimus assumenda. Sequi modi fugiat odio.</p>
    </div>
    </>
  );
}

export default Home_Page;
