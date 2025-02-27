import Header from './components/Header';
import GridComponent from './components/GridComponent';
import './index.css';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <>
      <div className="min-h-screen bg-black text-gray-100 px-4 py-8 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <Header />
          <GridComponent/>
          <FooterComponent/>
        </div> 
      </div>
    </>
  );
}

export default App;
