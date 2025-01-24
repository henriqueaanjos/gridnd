var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var i = (e, r, o) => r in e ? c(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    s.call(r, o) && i(e, o, r[o]);
  if (t)
    for (var o of t(r))
      l.call(r, o) && i(e, o, r[o]);
  return e;
}, a = (e, r) => f(e, p(r));
import w, { forwardRef as R } from "react";
import g from "../lib/IconBase.mjs";
import h from "../defs/ArrowCircleRight.mjs";
const n = R((e, r) => /* @__PURE__ */ w.createElement(g, a(m({ ref: r }, e), { weights: h })));
n.displayName = "ArrowCircleRight";
export {
  n as ArrowCircleRight
};
