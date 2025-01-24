var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (r, e, i) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : r[e] = i, m = (r, e) => {
  for (var i in e || (e = {}))
    d.call(e, i) && t(r, i, e[i]);
  if (o)
    for (var i of o(e))
      n.call(e, i) && t(r, i, e[i]);
  return r;
}, a = (r, e) => p(r, s(e));
import c, { forwardRef as N } from "react";
import R from "../lib/SSRBase.mjs";
import l from "../defs/GridNine.mjs";
const w = N((r, e) => /* @__PURE__ */ c.createElement(R, a(m({ ref: e }, r), { weights: l })));
w.displayName = "GridNine";
export {
  w as GridNine
};
