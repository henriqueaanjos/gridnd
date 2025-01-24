var i = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, l = (r, e) => {
  for (var a in e || (e = {}))
    s.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      n.call(e, a) && t(r, a, e[a]);
  return r;
}, m = (r, e) => f(r, p(e));
import S, { forwardRef as c } from "react";
import g from "../lib/SSRBase.mjs";
import R from "../defs/CellSignalX.mjs";
const d = c((r, e) => /* @__PURE__ */ S.createElement(g, m(l({ ref: e }, r), { weights: R })));
d.displayName = "CellSignalX";
export {
  d as CellSignalX
};
