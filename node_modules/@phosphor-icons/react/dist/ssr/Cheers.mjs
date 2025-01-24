var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      h.call(e, o) && m(r, o, e[o]);
  return r;
}, s = (r, e) => i(r, p(e));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/Cheers.mjs";
const w = d((r, e) => /* @__PURE__ */ R.createElement(l, s(a({ ref: e }, r), { weights: n })));
w.displayName = "Cheers";
export {
  w as Cheers
};
