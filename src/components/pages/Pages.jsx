import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../common/header/Header";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import About from "../about/About";
import Pricing from "../pricing/Pricing";
import Blog from "../blog/Blog";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import TopNav from "../common/header/TopNav";
import Newproject from "../projects/Newproject";
import Upcoming from "../projects/Upcoming";
import Ongoing from "../projects/Ongoing";
import Resell from "../projects/Resell";
import Whatsapp from "../Whatsapp/Whatsapp";
import Testimonial from "../Testimonial/Testimonial";
import Award from "../Awards/Award";
import Featured from "../home/featured/Featured"

const Pages = () => {
  return (
    <>
      <Router>
        <Whatsapp />
        <TopNav />
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/Newproject" component={Newproject} />
        <Route exact path="/Upcoming" component={Upcoming} />
        <Route exact path="/Ongoing" component={Ongoing} />
        <Route exact path="/Resell" component={Resell} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Testimonial" component={Testimonial}/>
        <Route exact path="/Award" component={Award}/>
        <Route exact path="/Featured" component={Featured}/>
       

        <Footer />
      </Router>
    </>
  );
};

export default Pages;
