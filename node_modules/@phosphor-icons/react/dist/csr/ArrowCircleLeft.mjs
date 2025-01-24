var i = Object.defineProperty, c = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (e, r, o) => r in e ? i(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, a = (e, r) => {
  for (var o in r || (r = {}))
    s.call(r, o) && m(e, o, r[o]);
  if (t)
    for (var o of t(r))
      l.call(r, o) && m(e, o, r[o]);
  return e;
}, f = (e, r) => c(e, p(r));
import w, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import A from "../defs/ArrowCircleLeft.mjs";
const C = n((e, r) => /* @__PURE__ */ w.createElement(d, f(a({ ref: r }, e), { weights: A })));
C.displayName = "ArrowCircleLeft";
export {
  C as ArrowCircleLeft
};
