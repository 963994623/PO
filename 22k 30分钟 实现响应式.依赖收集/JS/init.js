

import { ref, createRefs } from "./hooks.js"
import { render } from "./render.js";
import { bindEvent } from "./event.js";


export function createApp(el, { refs, methods }) {
    const $el = document.querySelector(el);
    const allNodes = $el.querySelectorAll('*')

    // console.log(createRefs(refs, allNodes));
    const refSet = createRefs(refs, allNodes)
    render(refSet)
    bindEvent.apply(refSet, [allNodes, methods])

}
export {
    ref
}