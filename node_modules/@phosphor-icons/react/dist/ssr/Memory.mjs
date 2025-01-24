var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, y = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && t(r, o, e[o]);
  if (m)
    for (var o of m(e))
      y.call(e, o) && t(r, o, e[o]);
  return r;
}, f = (r, e) => p(r, s(e));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/Memory.mjs";
const w = d((r, e) => /* @__PURE__ */ R.createElement(l, f(a({ ref: e }, r), { weights: n })));
w.displayName = "Memory";
export {
  w as Memory
};
