import { BrowserRouter ,Routes ,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import JoinPage from './pages/JoinPage'
import TaskPage from './pages/TaskPage'
import FourOFourPage from './pages/FourOFourPage'
import RootLayout from './shared/layout/RootLayout'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<RootLayout><HomePage/></RootLayout>} />
        <Route path='/login' element={<RootLayout><LoginPage/></RootLayout>} />
        <Route path='/join' element={<JoinPage/>} />
        <Route path='/dashboard' element={<RootLayout><TaskPage/></RootLayout>} />
        <Route path='*' element={<FourOFourPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App