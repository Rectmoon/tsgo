console.log(12345)

const iframe = document.createElement('iframe')
iframe.src = String(window.location)
document.body.appendChild(iframe)

console.log(iframe.contentWindow.Symbol.for('foo') === Symbol.for('foo'))

export default {}
