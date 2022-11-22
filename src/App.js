import './App.css';
import ResponsiveDrawer from './components/Navbar/navigation';


function App() {
  return (
    <div className="container">
      
      {/* Navigation Bar*/}
      <div className="container" id="SideNavbarHeader">
        <ResponsiveDrawer/>
      </div>
    
      {/* Content Container */}
      <body className='container'>


        {/* Patiant Name */}
        <div className='flex' id="patiantContainer">
        
        </div>

        {/* Requisitions */}
        <div className='flex' id="requisitionContainer">

        </div>

        
        {/* Tests */}
        <div className='flex' id="testContainer">

        </div>


      </body>
    
      {/*footer*/}
      <footer className='container'>

      </footer>
    
    </div>
  );
}

export default App;
