import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'

const App = () => {
  return (
    <div className="p-10 flex flex-col items-center gap-4">
      
      <Routes>
        <Route path="/"
        element={<HomePage />}
        />
        <Route path='/create'
        element={<CreatePage/>}
        />
          <Route path='/note/:id'
        element={<NoteDetailPage/>}
        />

      </Routes>
    </div>
  )
}

export default App