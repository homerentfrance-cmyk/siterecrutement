import Header from './components/Header'
import Hero from './components/Hero'
import Manifeste from './components/Manifeste'
import Piliers from './components/Piliers'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Manifeste />
        <Piliers />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
