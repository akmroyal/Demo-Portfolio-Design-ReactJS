import { useEffect, useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Skills from './components/Skills'
import About from './pages/Home/About'
import MainPage from './pages/Home/MainPage'
import Portfolio from './pages/Home/Portfolio'
import Slogun from './pages/Home/Slogun'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HashLoader } from 'react-spinners'
import FullAboutMe from './pages/RouterPage/FullAboutMe.jsx'
import LoadingWrapper from './hooks/useWrapperLoad.jsx'



function App() {
  // const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 4000);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (isLoading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen bg-[#222222]">
  //       <HashLoader color="#359be8" size={80} />
  //     </div>
  //   );
  // }
  // const isLoading = useLoading(4000);
  // if (isLoading) {
  //   return <LoadingWrapper time={4000} />
  // }
  return (
    <Router>
      <NavBar />
      <section className='relative flex flex-col bg-[#222222] rounded-b-[100px] overflow-x-hidden'>
        <Routes>
          {/* Front page 01 */}
          <Route path="/" element={
            <LoadingWrapper time={2000}>
              {/* <MainPage /> */}
              <MainPage />
              {/* About section 02 */}
              <About />
              {/* skills section 03 */}
              <Skills />
              {/* extra content */}
              <Slogun />
              {/* work - portfolio */}
              <Portfolio />
            </LoadingWrapper>
          } />
          <Route path="/about-me" element={
            <LoadingWrapper time={2000}>
              <FullAboutMe />
            </LoadingWrapper>
          } />
        </Routes>
      </section>
      {/* footer - contact page */}
      <Footer />
    </Router>
  )
}

export default App
