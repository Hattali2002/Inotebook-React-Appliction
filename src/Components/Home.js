import { useEffect } from 'react'
import Notes from './Notes'
import { useNavigate } from 'react-router-dom';

export default function Home(props) {
  const navigate=useNavigate();
  useEffect(()=>{
    if(localStorage.getItem('token')===null){
      navigate("/login");
    }
    // eslint-disable-next-line
  },[]);
  return ( 
    <div className="container">
      <Notes showAlert={props.showAlert} />
    </div>
  )
}
