import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

import Layout1 from "./layout/layout1";
import Homepage from './pages/HomePage';
import Aboutpage from './pages/AboutPage';
import Contactpage from './pages/ContactPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout1 />} >
      <Route index element={<Homepage />} />
      <Route path='/About' element={<Aboutpage />} />
      <Route path='/Contact' element={<Contactpage />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
