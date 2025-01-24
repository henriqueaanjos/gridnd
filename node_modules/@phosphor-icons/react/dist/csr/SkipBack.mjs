var p = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, k = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      k.call(e, r) && t(o, r, e[r]);
  return o;
}, i = (o, e) => c(o, f(e));
import n, { forwardRef as B } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/SkipBack.mjs";
const w = B((o, e) => /* @__PURE__ */ n.createElement(d, i(m({ ref: e }, o), { weights: l })));
w.displayName = "SkipBack";
export {
  w as SkipBack
};
