export function bindEvent(allNodes, methods) {
    allNodes.forEach(element => {
        const ev = element.getAttribute('@click')
        if (ev) {
            element.addEventListener('click', methods[ev].bind(this))
        }
    });
}