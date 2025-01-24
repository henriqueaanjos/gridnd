var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    s.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      c.call(o, r) && m(e, r, o[r]);
  return e;
}, p = (e, o) => i(e, n(o));
import B, { forwardRef as d } from "react";
import k from "../lib/IconBase.mjs";
import l from "../defs/BookOpen.mjs";
const w = d((e, o) => /* @__PURE__ */ B.createElement(k, p(a({ ref: o }, e), { weights: l })));
w.displayName = "BookOpen";
export {
  w as BookOpen
};
