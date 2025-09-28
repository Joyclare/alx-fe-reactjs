import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex justify-center gap-8 my-8">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="w-24 animate-bounce" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-24 hover:scale-110 transition" alt="React logo" />
        </a>
      </div>

      <h1 className="text-4xl font-bold text-blue-600 text-center">
        Vite + React + Tailwind
      </h1>

      <div className="card text-center mt-6">
        <button
          className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-600">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs text-sm text-gray-400 mt-6 text-center">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
