import { Suspense, useState } from 'react';
import './App.css'
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar'
import '@fortawesome/fontawesome-free/css/all.min.css';
import CustomerCard from './components/CustomerCard/CustomerCard';
import BannerCard from './components/BannerCard/BannerCard';
import { ToastContainer } from 'react-toastify';


const fetchCustomer = async () => {
  const res = await fetch("/customer.json")
  return res.json()
}

const customerPromise = fetchCustomer();

function App() {

  const [availableProgress, setAvailableProgress] = useState(0);
  const [selectedTask, setSelectedTask] = useState([]);
  const [availableResolved, setAvailableResolved] = useState(0);
  const [resolvedTask, setResolvedTask] = useState([]);

  const completeTask = (p) => {

    const findData = selectedTask.filter(ply => ply.id === p.id);
    setResolvedTask(findData);

    const filteredData = selectedTask.filter(ply => ply.id !== p.id);
    setSelectedTask(filteredData);
    
    setAvailableProgress(availableProgress - 1);
    setAvailableResolved(availableResolved + 1);
  }

  const removeData = (r) => {
    const filterRemove = resolvedTask.filter(res => res.id !== r.id);
    setResolvedTask(filterRemove);

    setAvailableResolved(availableResolved - 1);
    
  }


  return (
    <>

      <Navbar></Navbar>

      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>

        <BannerCard availableResolved={availableResolved} availableProgress={availableProgress}></BannerCard>

        <CustomerCard removeData={removeData} setResolvedTask={setResolvedTask} resolvedTask={resolvedTask} completeTask={completeTask} setSelectedTask={setSelectedTask} selectedTask={selectedTask} availableProgress={availableProgress} setAvailableProgress={setAvailableProgress} customerPromise={customerPromise}></CustomerCard>
      </Suspense>

      <Footer></Footer>

      <ToastContainer />
    </>
  )
}

export default App
