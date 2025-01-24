var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      R.call(e, o) && m(r, o, e[o]);
  return r;
}, s = (r, e) => f(r, i(e));
import d, { forwardRef as k } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/Lockers.mjs";
const w = k((r, e) => /* @__PURE__ */ d.createElement(l, s(a({ ref: e }, r), { weights: n })));
w.displayName = "Lockers";
export {
  w as Lockers
};
