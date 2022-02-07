/**
 *
 * Took from here: https://github.com/ElemeFE/element/blob/dev/src/transitions/collapse-transition.js
 * https://element.eleme.io/#/en-US/component/collapse
 *
 * vue doc: https://vuejs.org/v2/guide/transitions.html
 */

const addTransitionStyle = (el) => {
  el.style.transition = "all 0.3s";
}

const removeTransitionStyle = (el) => {
  el.style.transition = null;
}

export const beforeEnter = (el) => {
  addTransitionStyle(el);
  if (!el.dataset) el.dataset = {};

  el.dataset.oldPaddingTop = el.style.paddingTop;
  el.dataset.oldPaddingBottom = el.style.paddingBottom;

  el.style.height = '0';
  el.style.paddingTop = 0;
  el.style.paddingBottom = 0;
}

export const enter = (el) => {
  el.dataset.oldOverflow = el.style.overflow;
  if (el.scrollHeight !== 0) {
    el.style.height = el.scrollHeight + 'px';
    el.style.paddingTop = el.dataset.oldPaddingTop;
    el.style.paddingBottom = el.dataset.oldPaddingBottom;
  } else {
    el.style.height = '';
    el.style.paddingTop = el.dataset.oldPaddingTop;
    el.style.paddingBottom = el.dataset.oldPaddingBottom;
  }

  el.style.overflow = 'hidden';
}

export const afterEnter = (el) => {
  // for safari: remove class then reset height is necessary
  removeTransitionStyle(el);
  el.style.height = '';
  el.style.overflow = el.dataset.oldOverflow;
}

export const beforeLeave = (el) => {
  if (!el.dataset) el.dataset = {};
  el.dataset.oldPaddingTop = el.style.paddingTop;
  el.dataset.oldPaddingBottom = el.style.paddingBottom;
  el.dataset.oldOverflow = el.style.overflow;

  el.style.height = el.scrollHeight + 'px';
  el.style.overflow = 'hidden';
}

export const leave = (el) => {
  if (el.scrollHeight !== 0) {
    // for safari: add class after set height, or it will jump to zero height suddenly, weired
    addTransitionStyle(el);
    el.style.height = 0;
    el.style.paddingTop = 0;
    el.style.paddingBottom = 0;
  }
}

export const afterLeave = (el) => {
  removeTransitionStyle(el);
  el.style.height = '';
  el.style.overflow = el.dataset.oldOverflow;
  el.style.paddingTop = el.dataset.oldPaddingTop;
  el.style.paddingBottom = el.dataset.oldPaddingBottom;
}
