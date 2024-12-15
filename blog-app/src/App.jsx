
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { Provider } from "react-redux"
import { store } from './redux/store'
function App() {


  return (
    <Provider store={store}>
      <div className="max-w-screen-xl mx-auto px-2" >
        <Navbar />
        <main className="mt-8 min-h-screen">
          <Outlet />
        </main>
        <footer>Footer</footer>
      </div>

    </Provider>
  )
}

export default App
