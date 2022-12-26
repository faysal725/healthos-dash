import React from 'react'
import Dashboard from '../Pages/Dashboard/Dashboard'
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import SignIn from '../Pages/SignIn/SignIn';
import ProductList from '../Pages/ProductList/ProductList';
import CartPage from '../Pages/CartPage/CartPage';



function Layout() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />
      ,children: [
        {
          path: "/",
          element: <ProductList />,
        },
        {
          path: "cart",
          element: <CartPage />,
        },
        ]
    },
    {
      path: "/signin",
      element: <SignIn />
    },
  ]);


  return (
    <div  className='h-screen overflow-y-auto flex flex-col justify-start'>

        <RouterProvider router={router}>
          <Route path="/" element={<Dashboard />}>
            <Route path="/" element={<ProductList />} />
            <Route path="cart" element={<CartPage />} />
          </Route> 
          <Route path="/signin" element={<SignIn />} />
        </RouterProvider>
        
    </div>
  )
}

export default Layout