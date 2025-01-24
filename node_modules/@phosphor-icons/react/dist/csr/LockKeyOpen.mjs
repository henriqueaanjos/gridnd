var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? c(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    n.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      s.call(e, r) && m(o, r, e[r]);
  return o;
}, p = (o, e) => f(o, i(e));
import y, { forwardRef as d } from "react";
import k from "../lib/IconBase.mjs";
import l from "../defs/LockKeyOpen.mjs";
const w = d((o, e) => /* @__PURE__ */ y.createElement(k, p(a({ ref: e }, o), { weights: l })));
w.displayName = "LockKeyOpen";
export {
  w as LockKeyOpen
};
