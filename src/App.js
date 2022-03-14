import Navbar from './components/nav/Navbar'
import Hero from './components/hero/Hero'
import Footer from './components/footer/Footer'
import Form from './components/form/Form'
import ApiDocs from './components/api-docs/ApiDocs'
import Stats from './components/stats/Stats'
import Hr from './components/ui/Hr'

function App() {
  return (
    <div className='h-screen scroll-smooth'>
      <Navbar />
      <Hero />
      <Form />
      <Hr id='APIdocs' />
      <ApiDocs />
      <Hr />
      <Stats />
      <Footer />
    </div>
  )
}

export default App
