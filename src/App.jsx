import './App.css'
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar'

const fetchCustomer = async () => {
  const res = await fetch("/customer.json");
  return res.json()
}
const customerPromise = fetchCustomer()
console.log(customerPromise)

function App() {

  return (
    <>

      <Navbar></Navbar>
      <Footer></Footer>
    </>
  )
}

export default App
