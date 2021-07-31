
import './App.css';
import Form from './components/form'
import coffee from './db.json'
import coffee2 from './db2.json'

function App() {
  return(
    <>
   <h1>Hello!</h1>
  <Form props={coffee}/>
  <Form props={coffee2}/>
  </>
    )
  
}

export default App;
