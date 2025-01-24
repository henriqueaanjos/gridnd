var p = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var i = (e, r, o) => r in e ? p(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    s.call(r, o) && i(e, o, r[o]);
  if (t)
    for (var o of t(r))
      R.call(r, o) && i(e, o, r[o]);
  return e;
}, a = (e, r) => c(e, f(r));
import l, { forwardRef as w } from "react";
import g from "../lib/SSRBase.mjs";
import h from "../defs/ArrowCircleUpRight.mjs";
const d = w((e, r) => /* @__PURE__ */ l.createElement(g, a(m({ ref: r }, e), { weights: h })));
d.displayName = "ArrowCircleUpRight";
export {
  d as ArrowCircleUpRight
};
