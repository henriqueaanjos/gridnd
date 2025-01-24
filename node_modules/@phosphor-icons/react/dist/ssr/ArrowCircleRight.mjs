var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var i = (e, r, o) => r in e ? c(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    s.call(r, o) && i(e, o, r[o]);
  if (t)
    for (var o of t(r))
      R.call(r, o) && i(e, o, r[o]);
  return e;
}, a = (e, r) => f(e, p(r));
import l, { forwardRef as w } from "react";
import g from "../lib/SSRBase.mjs";
import h from "../defs/ArrowCircleRight.mjs";
const d = w((e, r) => /* @__PURE__ */ l.createElement(g, a(m({ ref: r }, e), { weights: h })));
d.displayName = "ArrowCircleRight";
export {
  d as ArrowCircleRight
};
