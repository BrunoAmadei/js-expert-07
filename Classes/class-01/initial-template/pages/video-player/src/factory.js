import Controller from "./controller"

const [rootPath] = window.location.href.split('/pages/')
const factory = {
    async initalize() {
        return Controller.initialize({
            //   view: new view(),
            //   service: new service({
            //     dbUrl: `${rootPath}/assets/database.json`,
            //     cardListWorker
            // })  
        })
    }
}

export default factory