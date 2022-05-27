import './App.css';
import {Routes} from "react-router";
import {Route, BrowserRouter} from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SingUp/SignUp";
import MotionPicture from "./components/MotionPicture/MotionPicture";
import Picture from "./components/Picture/Picture";
import Main from "./components/Main/Main";
import AboutUs from './components/AboutUs/AboutUs'
import { useDispatch, useSelector } from 'react-redux';
import { isAuthThunkCreator } from './redux/motionPictureReducer';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

function App() {
  let dispatch = useDispatch()
  //navigate(`/picture/${id}`)
  useEffect(() => {
    //dispatch(registrationThunkCreator('имя', 'фамилия', '2022-03-20', 'mail@mail.ru', '123', 1))
    dispatch(isAuthThunkCreator())
  }, [])
  
  return (
      <BrowserRouter>
      <div>
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
      </div>
      </BrowserRouter>
  );
}

export default App;
