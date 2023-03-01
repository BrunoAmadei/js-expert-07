import HandGestureController from "../controllers/handGestureController.js"
import HandGestureService from "../services/handGestureService.js"
import HandGestureView from "../views/handGestureView.js"

const cardListWorker = new Worker(`./src/workers/cardListWorker.js`, { type: "module" })
const [rootPath] = window.location.href.split('/pages/')
const factory = {
  async initalize() {
    return HandGestureController.initialize({
      view: new HandGestureView(),
      service: new HandGestureService({ })
    })
  }
}

export default factory