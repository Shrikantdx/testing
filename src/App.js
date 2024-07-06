

// import { BrowserRouter as Router, Routes, Route, useLocation, } from 'react-router-dom'

// import './App.css';
// import About from './components/About';
// import Service from './components/Service';
// import Portfolio from './components/Portfolio';
// import Blog from './components/Blog';
// import NavigationMenu from './components/NavigationMenu';
// import Home from './components/Home';
// import SignUp from './components/SignUp';
// import SignIn from './components/SignIn';
// import ForgotPassword from './components/ForgotPassword';
// import CareerGuidance from './components/CareerGuidance';
// import Footer from './components/Footer';
// import { ToastContainer } from "react-toastify";
// import Try from "./components/try"
// import Student from "./components/Student"
// import Dashboard from './components/Dashboard';
// import Error from './components/Error';
// function App() {
//   const location = useLocation();
//   return (
//     <div>

//       <Router>
//         {/* <NavigationMenu /> */}
//         {location.pathname !== '/dashboard' && <NavigationMenu />}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/contact" element={<SignIn />} />
//           <Route path="/sign-up" element={<SignUp />} />
//           <Route path="/forgot-password" element={<ForgotPassword />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/portfolio" element={<Portfolio />} />
//           <Route path="/service" element={<Service />} />
//           <Route path='/dashboard' element={<Dashboard />} />
//           <Route path="/sign-in" element={<SignUp />} />
//           <Route path="/career" element={<CareerGuidance />} />
//           <Route path="/student" element={<Student />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="*" element={<Error />} />
//           <Route path="/try" element={<Try />} />

//         </Routes>
//         <FooterOnAbout />
//       </Router>
//       <ToastContainer
//         position="bottom-center"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       />
//     </div>
//   )
// }


// function FooterOnAbout() {
//   let location = useLocation();
//   if (location.pathname === '/about') {
//     return <Footer />;
//   }
//   return null;
// }
// export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import AppContent from './components/AppContent';

function App() {
  return (
    <div>
      <Router>
        <AppContent />
      </Router>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}


export default App;
