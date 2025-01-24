var p = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    d.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      n.call(e, o) && m(r, o, e[o]);
  return r;
}, f = (r, e) => i(r, s(e));
import w, { forwardRef as c } from "react";
import B from "../lib/SSRBase.mjs";
import R from "../defs/ArrowBendLeftUp.mjs";
const l = c((r, e) => /* @__PURE__ */ w.createElement(B, f(a({ ref: e }, r), { weights: R })));
l.displayName = "ArrowBendLeftUp";
export {
  l as ArrowBendLeftUp
};
