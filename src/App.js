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



      </body>
    
      {/*footer*/}
      <footer className='container'>

      </footer>
    
    </div>
  );
}

export default App;
