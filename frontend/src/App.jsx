import {useEffect} from 'react'
import './App.css'
import axios from "axios";

function App() {
  const fetchData = async () => {
     const x = await axios.get('api/')
     console.log(x);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      Twitter
    </div>
  )
}

export default App
