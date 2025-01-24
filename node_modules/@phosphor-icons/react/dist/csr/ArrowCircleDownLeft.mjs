var i = Object.defineProperty, c = Object.defineProperties;
var w = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (e, r, o) => r in e ? i(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, a = (e, r) => {
  for (var o in r || (r = {}))
    n.call(r, o) && m(e, o, r[o]);
  if (t)
    for (var o of t(r))
      p.call(r, o) && m(e, o, r[o]);
  return e;
}, f = (e, r) => c(e, w(r));
import s, { forwardRef as l } from "react";
import d from "../lib/IconBase.mjs";
import A from "../defs/ArrowCircleDownLeft.mjs";
const C = l((e, r) => /* @__PURE__ */ s.createElement(d, f(a({ ref: r }, e), { weights: A })));
C.displayName = "ArrowCircleDownLeft";
export {
  C as ArrowCircleDownLeft
};
