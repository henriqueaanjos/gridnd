var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, y = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      y.call(e, r) && m(o, r, e[r]);
  return o;
}, c = (o, e) => i(o, p(e));
import R, { forwardRef as d } from "react";
import k from "../lib/SSRBase.mjs";
import l from "../defs/LockKey.mjs";
const n = d((o, e) => /* @__PURE__ */ R.createElement(k, c(a({ ref: e }, o), { weights: l })));
n.displayName = "LockKey";
export {
  n as LockKey
};
