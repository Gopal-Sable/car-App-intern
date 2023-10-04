import logo from './logo.svg';
import './App.css';
import PaginationComponent from './components/PaginationComponent';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div>
        
        <PaginationComponent/>

        {/* <Routes>
          <Route exact path="/" element={<PaginationComponent/>}/>
          <Route exact path="/page/:page" element={<PaginationComponent/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes> */}
      </div>
  );
}

export default App;
