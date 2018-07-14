function component() {
    var element = document.createElement('div')

    element.innerText('Hello world!')

    return element
}

document.body.appendChild(component())