var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var R = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var a = (e, r, o) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    R.call(r, o) && a(e, o, r[o]);
  if (t)
    for (var o of t(r))
      w.call(r, o) && a(e, o, r[o]);
  return e;
}, i = (e, r) => p(e, s(r));
import S, { forwardRef as c } from "react";
import g from "../lib/SSRBase.mjs";
import h from "../defs/ArrowSquareRight.mjs";
const d = c((e, r) => /* @__PURE__ */ S.createElement(g, i(m({ ref: r }, e), { weights: h })));
d.displayName = "ArrowSquareRight";
export {
  d as ArrowSquareRight
};
