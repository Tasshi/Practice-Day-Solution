import './App.css'
import WelcomeCard from './card'

function App() {

  return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <WelcomeCard/>
          <WelcomeCard/>
          <WelcomeCard/>
        </div>
      </div>
  );
}

export default App
