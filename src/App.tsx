import './App.css'

import { Functional, Properties, State } from './components'
import { HomeContainer } from './pages/Home/HomeContainer'

export const App = () => (
  <div className="App">
    <div>
      <div>
        <Functional name={'Functional Component'} />
      </div>
      <div>
        <Properties name={'Properties Component'} description={'Props'} />
      </div>
      <div>
        <State name={'useEffect and useState'} />
      </div>
      <div>
        <HomeContainer />
      </div>
    </div>
  </div>
)
