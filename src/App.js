// import logo from './logo.svg';
// import './App.css';
// import {createBrowserRouter, RouterProvider} from 'react-router-dom'
// import {Link} from 'react-router-dom'
// import Create from './pages/create';
// import Home from './pages/home';
// import Steps from './pages/steps';
// import Templates from './pages/templates';

// function App() {
//  const router = createBrowserRouter([
//         {
//           path:'/', element: <><Home/></>
//         },
//         {
//           path:'/create', element: <><Create/></>
//         }
//       ])


//   return (
//     <>
//     <RouterProvider router={router} />    
//     </>
//   );
// }

// export default App;


import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Create from './pages/create';
import Home from './pages/home';
import Steps from './pages/steps';
import Templates from './pages/templates';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/steps" element={<Steps />} />
        <Route path="/templates" element={<Templates />} />
      </Routes>
    </Router>
  );
}

export default App;
