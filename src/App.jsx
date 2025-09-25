import { Suspense } from 'react';
import './App.css'
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar'
import '@fortawesome/fontawesome-free/css/all.min.css';
import CustomerCard from './components/CustomerCard/CustomerCard';
import BannerCard from './components/BannerCard/BannerCard';

const fetchCustomer = async () => {
  const res = await fetch("/customer.json")
  return res.json()
}

const customerPromise = fetchCustomer();

function App() {

  return (
    <>

      <Navbar></Navbar>

      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>

      <BannerCard></BannerCard>

      <CustomerCard customerPromise={customerPromise}></CustomerCard>
      </Suspense>

      <Footer></Footer>
    </>
  )
}

export default App
