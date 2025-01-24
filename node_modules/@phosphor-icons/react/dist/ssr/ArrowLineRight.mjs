var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var R = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (e, r, o) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    R.call(r, o) && i(e, o, r[o]);
  if (t)
    for (var o of t(r))
      n.call(r, o) && i(e, o, r[o]);
  return e;
}, a = (e, r) => p(e, s(r));
import w, { forwardRef as c } from "react";
import g from "../lib/SSRBase.mjs";
import h from "../defs/ArrowLineRight.mjs";
const d = c((e, r) => /* @__PURE__ */ w.createElement(g, a(m({ ref: r }, e), { weights: h })));
d.displayName = "ArrowLineRight";
export {
  d as ArrowLineRight
};
