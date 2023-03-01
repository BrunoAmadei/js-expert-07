export default class HandGestureService {
    #fingerpose
    #handPoseDetection
    #handVersion
    #detector = null
    constructor({ fingerpose, handPoseDetection, handVersion }) {
        this.#fingerpose = fingerpose
        this.#handPoseDetection = handPoseDetection
        this.#handVersion = handVersion
    }

    async initializeDetector() {
        if (this.#detector) return this.#detector

        const detectorConfig = {
            runtime: 'mediapipe', // or 'tfjs'
            solutionPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/hands',
            modelType: 'lite'
        }
        const detector = await this.#handPoseDetection.createDetector(this.#handPoseDetection.SupportModels.MediaPipeHands, detectorConfig)
    }
}