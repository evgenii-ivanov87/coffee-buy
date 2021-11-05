
import './App.css';
import Container from './components/Container/Container'
import Header from './components/header/header'
import FormItemList from './components/FormItemList/FormItemList'
import Listnavigation from './components/ListNavigation/Listnavigation'
import Price from './components/Price/Price'

// import Form from './components/form/form'
import coffee from './db.json'
import coffee2 from './db2.json'

function App() {
  return(
    <>
   {/* <h1>Hello!</h1> */}
   <Header/>

   <Container>
   <Listnavigation/>
   </Container>

      <Container>      
      <FormItemList props={coffee}/>
      <FormItemList props={coffee2}/>       
    </Container>
    <Container>
      <Price/>
      </Container>
  
  
  
  </>
    )
  
}

export default App;
