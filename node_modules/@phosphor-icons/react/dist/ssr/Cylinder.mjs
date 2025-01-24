var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    d.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      l.call(e, o) && m(r, o, e[o]);
  return r;
}, i = (r, e) => p(r, s(e));
import n, { forwardRef as c } from "react";
import y from "../lib/SSRBase.mjs";
import R from "../defs/Cylinder.mjs";
const w = c((r, e) => /* @__PURE__ */ n.createElement(y, i(a({ ref: e }, r), { weights: R })));
w.displayName = "Cylinder";
export {
  w as Cylinder
};
