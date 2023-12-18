import Header from './Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Shared/Footer';
import { ServiceContext, ServiceContextProvider } from './Component/ServiceContext';


function App() {


  return (
    <>
    <ServiceContextProvider>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      </ServiceContextProvider>
    
    </>
  )
}

export default App
