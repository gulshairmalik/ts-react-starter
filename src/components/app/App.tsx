import * as React from "react"
import { observer, inject } from "mobx-react"
import { RootStore } from "../../stores/RootStore"
import "./App_styles.css"
export interface IAppProps {
    compiler: string
    framework: string
    rootStore: RootStore
}

@inject("rootStore")
@observer
export class App extends React.Component<any> {
    rootStore: RootStore = this.props.rootStore
    render() {
        return (
            <div className="App-container">
                <div className="App-header">
                    <h3>Go {this.rootStore.message}! ({this.rootStore.selectedIndex+1}/{this.rootStore.messages.length})</h3>
                    <button onClick={this.rootStore.nextMessage}>test an action</button>
                </div>
            </div>
        )
    }
}
