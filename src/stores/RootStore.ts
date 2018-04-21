import { observable, computed, action } from "mobx"

export class RootStore {
    messages: Array<string> = ["Mobx", "TypeScript", "React"]
    @observable selectedIndex = 0

    @computed
    get message() {
        return this.messages[this.selectedIndex]
    }

    @action
    nextMessage = () => {
        this.selectedIndex + 1 < this.messages.length
            ? this.selectedIndex++
            : (this.selectedIndex = 0)
    }
}
const rootStore = new RootStore()
export { rootStore }
