onmessage = ({data}) =>{
    console.log('worker', data)

    postMessage({
        'ok': 'isso'
    })
}