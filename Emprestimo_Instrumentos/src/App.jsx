import "./App.css"
import Register from "./components/Register"
import History from "./components/History"
import Title from "./components/Title"

function App() {
  return (
    <div>
      <div>
        <Title />
      </div>
      <div className="register">
        <Register />
      </div>
      <div className="history">
        <History />
      </div>
    </div>
  )
}

export default App