var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var R = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var r = (t, o, e) => o in t ? f(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, s = (t, o) => {
  for (var e in o || (o = {}))
    R.call(o, e) && r(t, e, o[e]);
  if (m)
    for (var e of m(o))
      l.call(o, e) && r(t, e, o[e]);
  return t;
}, a = (t, o) => i(t, p(o));
import w, { forwardRef as c } from "react";
import B from "../lib/SSRBase.mjs";
import d from "../defs/RowsPlusBottom.mjs";
const n = c((t, o) => /* @__PURE__ */ w.createElement(B, a(s({ ref: o }, t), { weights: d })));
n.displayName = "RowsPlusBottom";
export {
  n as RowsPlusBottom
};
