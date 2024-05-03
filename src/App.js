import './App.css';
import ProtectedRoute from './Components/React-roadmap-Docs/Hooks/ProtectedRoute';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <ProtectedRoute/>
      </header>
    </div>
  );
}

export default App;
