var i = Object.defineProperty, c = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && t(r, o, e[o]);
  if (a)
    for (var o of a(e))
      s.call(e, o) && t(r, o, e[o]);
  return r;
}, f = (r, e) => c(r, l(e));
import n, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import C from "../defs/CircleHalf.mjs";
const H = d((r, e) => /* @__PURE__ */ n.createElement(w, f(m({ ref: e }, r), { weights: C })));
H.displayName = "CircleHalf";
export {
  H as CircleHalf
};
