import './App.css';
import {Routes} from "react-router";
import {Route, BrowserRouter} from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SingUp/SignUp";
import MotionPicture from "./components/MotionPicture/MotionPicture";
import Picture from "./components/Picture/Picture";
import Main from "./components/Main/Main";
import AboutUs from './components/AboutUs/AboutUs'

function App() {
  return (
      <BrowserRouter>
      <main>
          <Routes>
            <Route path='/signIn' element={<SignIn />}/>
            <Route path='/signUp' element={<SignUp />}/>
            <Route path='/motionPicture/' element={<MotionPicture />}>
                <Route path=':genreName' element={<Picture />}/>
            </Route>
            <Route path='/picture/' element={<Picture />}>
                <Route path=':pictureId' element={<Picture />}/>
            </Route>
            <Route path='/main' element={<Main />}/>
            <Route path='/aboutUs' element={<AboutUs />}/>
            <Route exact path='/' element={<Main />}/>
          </Routes>
      </main>
      </BrowserRouter>
  );
}

export default App;
