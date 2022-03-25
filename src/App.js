import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

// Pages
const Home = React.lazy(() => import("./components/pages/Home"));
const Hometwo = React.lazy(() => import("./components/pages/Hometwo"));
const About = React.lazy(() => import("./components/pages/About"));
const Blog = React.lazy(() => import("./components/pages/Blog"));
const Blogleft = React.lazy(() => import("./components/pages/Blogleft"));
const Blogdetail = React.lazy(() => import("./components/pages/Blogdetail"));
const Service = React.lazy(() => import("./components/pages/Service"));
const Servicedetail = React.lazy(() => import("./components/pages/Servicedetail"));
const Personalloan = React.lazy(() => import("./components/pages/Personalloan"));
const Homeloan = React.lazy(() => import("./components/pages/Homeloan"));
const Carloan = React.lazy(() => import("./components/pages/Carloan"));
const Usedcarloan = React.lazy(() => import("./components/pages/Usedcarloan"));
const Mortgageloans = React.lazy(() => import("./components/pages/Mortgageloans"));
const Businessloan = React.lazy(() => import("./components/pages/Businessloan"));
const Doctorsloan = React.lazy(() => import("./components/pages/Doctorsloan"));
const Creditcard = React.lazy(() => import("./components/pages/Creditcard"));
const Partnerprogram = React.lazy(() => import("./components/pages/Partnerprogram"));
const Loancalculator = React.lazy(() => import("./components/pages/Loancalculator"));
const Loanstep = React.lazy(() => import("./components/pages/Loanstep"));
const Team = React.lazy(() => import("./components/pages/Team"));
const Finance = React.lazy(() => import("./components/pages/Finance"));
const Comingsoon = React.lazy(() => import("./components/pages/Comingsoon"));
const Error = React.lazy(() => import("./components/pages/Error"));
const Contact = React.lazy(() => import("./components/pages/Contact"));
const Userdashboard = React.lazy(() => import("./components/pages/Userdashboard"));

function App() {
  return (
    <div className="main-body">
      <Router>
        <ScrollToTop>
          <Suspense fallback={<div></div>}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/home-v2" component={Hometwo} />
              <Route path="/about" component={About} />
              <Route path="/blog" component={Blog} />
              <Route path="/blog-sidebar" component={Blogleft} />
              <Route path="/blog-single/:id" component={Blogdetail} />
              <Route path="/service" component={Service} />
              <Route path="/service-detail/:id" component={Servicedetail} />
              <Route path="/personal-loan/:id" component={Personalloan} />
              <Route path="/home-loan/:id" component={Homeloan} />
              <Route path="/car-loan/:id" component={Carloan} />
              <Route path="/used-car-loan/:id" component={Usedcarloan} />
              <Route path="/mortgage-loan/:id" component={Mortgageloans} />
              <Route path="/business-loan/:id" component={Businessloan} />
              <Route path="/doctors-loan/:id" component={Doctorsloan} />
              <Route path="/loan-calculator" component={Loancalculator} />
              <Route path="/loan-step" component={Loanstep} />
              <Route path="/team" component={Team} />
              <Route path="/finance" component={Finance} />
              <Route path="/coming-soon" component={Comingsoon} />
              <Route path="/error" component={Error} />
              <Route path="/contact" component={Contact} />
              <Route path="/loan-dashboard" component={Userdashboard} />
              <Route path="/credit-card" component={Creditcard} />
              <Route path="/partner-program" component={Partnerprogram} />
            </Switch>
          </Suspense>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
