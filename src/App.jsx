import { Outlet } from 'react-router-dom';
import Nav from './components/NavHeader';
import Footer from './components/Footer';


function App() {

  return (
    <>
      <Nav />
      <main className="container-fluid">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
