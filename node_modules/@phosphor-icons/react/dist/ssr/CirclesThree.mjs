var s = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      l.call(e, o) && m(r, o, e[o]);
  return r;
}, i = (r, e) => c(r, f(e));
import h, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/CirclesThree.mjs";
const w = R((r, e) => /* @__PURE__ */ h.createElement(d, i(a({ ref: e }, r), { weights: n })));
w.displayName = "CirclesThree";
export {
  w as CirclesThree
};
