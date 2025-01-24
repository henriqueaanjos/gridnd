var i = Object.defineProperty, c = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    f.call(e, o) && t(r, o, e[o]);
  if (s)
    for (var o of s(e))
      p.call(e, o) && t(r, o, e[o]);
  return r;
}, a = (r, e) => c(r, l(e));
import h, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import u from "../defs/CirclesThreePlus.mjs";
const w = n((r, e) => /* @__PURE__ */ h.createElement(d, a(m({ ref: e }, r), { weights: u })));
w.displayName = "CirclesThreePlus";
export {
  w as CirclesThreePlus
};
