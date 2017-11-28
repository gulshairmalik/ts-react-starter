import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'
import { App } from './components/App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App compiler="TypeScript" framework="React"/>, document.getElementById('root'))
registerServiceWorker()
