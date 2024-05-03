import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import{Home}from'./routers/home/Home';
import Layout from './components/layout/Layout';
import{EnroladinhoDeSalsicha}from'./routers/enroladinhoDeSalsicha/EnroladinhoDeSalsicha';
import{EscondidinhoDeCharque}from'./routers/escondidinhoDeCharque/EscondidinhoDeCharque';
import{LasanhaDeCarneMoida}from'./routers/lasanhaDeCarneMoida/LasanhaDeCarneMoida';
import{PizzaDePaoDeForma}from'./routers/pizzaDePaoDeForma/PizzaDePaoDeForma';
import{StrogonoffDeFrango}from'./routers/strogonoffDeFrango/StrogonoffDeFrango';
import'./global.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path:'/enroladinhoDeSalsicha',
        element: <EnroladinhoDeSalsicha />
      },
      {
        path:'/escondidinhoDeCharque',
        element: <EscondidinhoDeCharque />
      },
      {
        path:'/lasanhaDeCarneMoida',
        element: <LasanhaDeCarneMoida />
      },
      {
        path:'/pizzaDePaoDeForma',
        element: <PizzaDePaoDeForma />
      },
      {
        path:'/strogonoffDeFrango',
        element: <StrogonoffDeFrango />
      },
   
    ]
  },
  {
    index:true,
    element: <Home />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);