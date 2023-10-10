import { useState } from 'react'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import Alert from './components/Alert'

function App() {

  const [mode, setMode] =useState('light')   //wheater dark mode is enabled or not
  const[alert, setAlert]=useState(null)

  const showAlert=(messege, type)=>{
    setAlert({
      msg: messege,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode ==='light') {
      setMode('dark');
      document.body.style.backgroundColor = '#424750';
      showAlert("Dark Mode has been enabled", "success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  }
   

 
  return (
    <>
    {/* <Navbar/> */}
    <Navbar title="TextUtils" search="Find" mode={mode} toggleMode={toggleMode}/>
    
    <Alert alert={alert}/>

    <div className='conatiner my-3'>
    {/* <About/> */}
    <TextForm heading="Enter the text to Analyze" mode={mode} showAlert={showAlert} />  
    </div>
    

    </>
  )
}

export default App
