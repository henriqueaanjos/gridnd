var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var R = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    R.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      l.call(e, o) && m(r, o, e[o]);
  return r;
}, f = (r, e) => p(r, s(e));
import c, { forwardRef as d } from "react";
import n from "../lib/SSRBase.mjs";
import u from "../defs/Ruler.mjs";
const w = d((r, e) => /* @__PURE__ */ c.createElement(n, f(a({ ref: e }, r), { weights: u })));
w.displayName = "Ruler";
export {
  w as Ruler
};
