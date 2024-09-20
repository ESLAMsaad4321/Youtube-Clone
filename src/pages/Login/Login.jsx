import { useDispatch, useSelector } from 'react-redux'
import './_login.scss'
import { login } from '../../Redux/Actions/auth.action';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const dispatch =useDispatch();
  const accessToken = useSelector(state=>state.auth.accessToken);
  const handleLogin = ()=>{
    dispatch(login())
  }
  const navigate = useNavigate();
  useEffect(()=>{
    if(accessToken){
      navigate('/');
    }
  },[accessToken,navigate])
  return (
    <div className='login'>
      <div className="login_container">
        <img src="https://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" />
        <button onClick={handleLogin}>Login with google</button>
        <p>This Project is made using Youtube API</p>
      </div>
    </div>
  )
}

export default Login
