import { Outlet } from 'react-router-dom';
import Nav from './components/NavHeader';
import Footer from './components/Footer';


function App() {

  return (
    <>
      <Nav />
      <main className="container-fluid mx-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
