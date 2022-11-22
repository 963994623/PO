export function render(refSet) {
    for (const key in refSet) {
        let content = refSet[key]
        _render(content)
    }
}

export function update({ dept, value }) {
    _render({ dept, value })
}

function _render({ dept, value }) {
    dept.forEach(e => {
        e.innerHTML = value
    })
}