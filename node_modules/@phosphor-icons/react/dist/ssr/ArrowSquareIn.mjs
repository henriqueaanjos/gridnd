var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var t = (e, r, o) => r in e ? i(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    n.call(r, o) && t(e, o, r[o]);
  if (a)
    for (var o of a(r))
      w.call(r, o) && t(e, o, r[o]);
  return e;
}, f = (e, r) => p(e, s(r));
import S, { forwardRef as c } from "react";
import I from "../lib/SSRBase.mjs";
import R from "../defs/ArrowSquareIn.mjs";
const d = c((e, r) => /* @__PURE__ */ S.createElement(I, f(m({ ref: r }, e), { weights: R })));
d.displayName = "ArrowSquareIn";
export {
  d as ArrowSquareIn
};
