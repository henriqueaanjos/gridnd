var s = Object.defineProperty, l = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    f.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      p.call(e, a) && t(r, a, e[a]);
  return r;
}, i = (r, e) => l(r, n(e));
import c, { forwardRef as B } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/TennisBall.mjs";
const w = B((r, e) => /* @__PURE__ */ c.createElement(R, i(m({ ref: e }, r), { weights: d })));
w.displayName = "TennisBall";
export {
  w as TennisBall
};
