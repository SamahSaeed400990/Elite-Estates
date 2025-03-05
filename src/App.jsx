import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Blog from './Components/Blog/Blog'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Popular from './Components/Popular/Popular'
import Services from './Components/Services/Services'
import Home from './Pages/Home/Home'
import Layout from './Components/Layout'
import ProductDetails from './Components/ProductDetails/ProductDetails'



function App() {
  
  const routes= createBrowserRouter([
    {
      path:"/" , element: <Layout /> ,children:[
        {index:true,element:<Home />},
        {path:'productdetails' ,element:<ProductDetails />}
    
      ]
    }
  ])
  return (
    <>
    {/* <Navbar />  */}
    <RouterProvider router={routes} ></RouterProvider>
    

      {/* <Home  />
   
     <Footer />  */}
   
    </>
  )
}

export default App
