import { BrowserRouter } from 'react-router-dom'
import './index.css'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <div >
      <BrowserRouter>
      <AppRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App
