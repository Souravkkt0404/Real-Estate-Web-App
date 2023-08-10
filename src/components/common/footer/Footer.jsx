import React from "react";
import { footer } from "../../data/Data";
import "./footer.css";
import {Link} from "react-router-dom";

const Footer = () => {
  const handleTopBtnClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex '>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
           <Link to="/Contact"><button className='btn5'>Contact Us Today</button></Link> 
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo '>
              <img className="log" src='../images/logo.png' alt='' />
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>

              
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <Link to={items.url} onClick={handleTopBtnClick}> <li> {items.list} </li></Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2021 RentUP. Designd By Ace web solution.</span>
      </div>
    </>
  )
}

export default Footer
