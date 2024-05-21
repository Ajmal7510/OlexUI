import './App.css';
import Login from './Pages/Login';
import Signup from'./Pages/Signup';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthProvider, { useAuth } from './Security/AouthContext';
import AuthenticatedRoute from './Security/Aothenticated';
import Create from './Pages/Create';
import ViewPost from './Pages/ViewPost';
import Profile from './Pages/Profile';
import ChildComponent from './Components/ChildComponent';

function App() {

 
  const Context=useAuth()
  return (
  <>


 
 <p>{Context.state}</p>

 <ChildComponent/>

  <Router>
      <Routes>
        <Route path="/" element={
       
           <Home />
      
       } />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/create' element={
          <AuthenticatedRoute> <Create/></AuthenticatedRoute>
       
        }/>

        <Route path='viewpost/:productId' element={<ViewPost/>}/>

        <Route path='/profile' element={<Profile/>} />
      
      </Routes>
    </Router>
 
  </>
  );
}

export default App;
