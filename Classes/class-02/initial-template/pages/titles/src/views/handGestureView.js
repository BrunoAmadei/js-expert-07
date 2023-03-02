export default class HandGestureView {
  #handCanvas = document.getElementById('#hands')
  #canvasContext = this.#handCanvas.getContext("2d")

  constructor() {
    this.#handsCanvas.width = globalThis.screen.availWidth
    this.#handsCanvas.height = globalThis.screen.availHeight
  }

  clearCanvas() {
    this.#canvasContext.clearRect(0, 0, this.#canvasContext.width, this.#canvasContext.height)
  }

  // RECEBENDO AS MÃOS DO TF 
  drawResults(hands) {
    for (const { keypoints, handedness } of hands) {
      if (!keypoints) continue

      this.#canvasContext.fillStyle = handedness === "Left" ? "red" : "green"
      this.#canvasContext.strokeStyle = "white"
      this.#canvasContext.lineWidth = 8
      this.#canvasContext.lineJoin = "round"

      this.#drawJoins(keypoints)
    }
  }

  #drwaJoins(keypoints) {
    for (const { x, y } of keypoints) {
      this.#canvasContext.beginPath()
      const newX = x - 2
      const newY = y - 2
      const radius = 3
      const startAngle = 0
      const endAngle = 2 * Math.PI
  
      this.#canvasContext.arc(newX, newY, radius, startAngle, endAngle)
      this.#canvasContext.fill()
    }
  }

  loop(fn) {
    requestAnimationFrame(fn)
  }

  scrollPage(top) {
    scroll({
      top,
      behavior: "smooth"
    })
  }

}