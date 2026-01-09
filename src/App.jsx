import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Button from './Button/Button.jsx'
import Student from './Student.jsx'

function App() {

  return (
    <>
    <Header/>
    <Food/>
    <Button/>
    <Student name='Jack Sparrow' age={25} isStudent={false}/>
    <Footer/>
    </>

  )
}

export default App
