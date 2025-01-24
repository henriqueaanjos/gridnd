var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (o, a, e) => a in o ? f(o, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[a] = e, m = (o, a) => {
  for (var e in a || (a = {}))
    d.call(a, e) && t(o, e, a[e]);
  if (r)
    for (var e of r(a))
      n.call(a, e) && t(o, e, a[e]);
  return o;
}, p = (o, a) => i(o, s(a));
import S, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import l from "../defs/HandSoap.mjs";
const w = c((o, a) => /* @__PURE__ */ S.createElement(R, p(m({ ref: a }, o), { weights: l })));
w.displayName = "HandSoap";
export {
  w as HandSoap
};
