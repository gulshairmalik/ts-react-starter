import * as React from "react"
import * as ReactDOM from "react-dom"
import "./index_styles.css"
import { App } from "./components/app/App"
import registerServiceWorker from "./registerServiceWorker"
import { Provider } from "mobx-react"
import { rootStore } from "./stores/RootStore"
ReactDOM.render(
    <Provider rootStore={rootStore}>
        <App compiler="TypeScript" framework="React" />
    </Provider>,
    document.getElementById("root")
)
registerServiceWorker()
