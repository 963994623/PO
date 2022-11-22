import { update } from "./render.js"
const reg_var = /\{\{(.*?)\}\}/

export function ref(defaultValue) {
    const refWraaper = {
        dept: new Set(),
        _value: defaultValue,
        _defaultValue: defaultValue,
        $reset() {
            this.value = this._defaultValue
        }
    }
    Object.defineProperty(refWraaper, 'value', {
        get() {
            return refWraaper._value
        },
        set(newValue) {
            refWraaper._value = newValue
            update(refWraaper)
        }
    })
    return refWraaper
}

export function createRefs(refs, allNodes) {
    allNodes.forEach(element => {
        if (reg_var.test(element.textContent)) {

            const newKey = element.textContent.match(reg_var)[1].trim()
            refs[newKey].dept.add(element)
        }
    });
    return refs
}