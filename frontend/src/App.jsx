import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import RootLayouts from './layouts/Rootlayout';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  
  const router = createBrowserRouter(

    createRoutesFromElements(


      <Route path='/' element={<RootLayouts />}>

        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='services' element={<Services />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='blog' element={<Blog />} />
        <Route path='contact' element={<Contact />} />

      </Route>

    )

  )

  return (

    <RouterProvider router={router}/>

  );

}

export default App;