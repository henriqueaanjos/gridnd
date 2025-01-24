var i = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, s = (r, e) => {
  for (var o in e || (e = {}))
    d.call(e, o) && a(r, o, e[o]);
  if (m)
    for (var o of m(e))
      l.call(e, o) && a(r, o, e[o]);
  return r;
}, t = (r, e) => f(r, p(e));
import u, { forwardRef as c } from "react";
import g from "../lib/SSRBase.mjs";
import R from "../defs/HourglassMedium.mjs";
const n = c((r, e) => /* @__PURE__ */ u.createElement(g, t(s({ ref: e }, r), { weights: R })));
n.displayName = "HourglassMedium";
export {
  n as HourglassMedium
};
