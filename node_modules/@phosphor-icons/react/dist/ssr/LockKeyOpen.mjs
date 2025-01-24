var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? c(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      n.call(e, r) && m(o, r, e[r]);
  return o;
}, p = (o, e) => f(o, i(e));
import y, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import k from "../defs/LockKeyOpen.mjs";
const l = R((o, e) => /* @__PURE__ */ y.createElement(d, p(a({ ref: e }, o), { weights: k })));
l.displayName = "LockKeyOpen";
export {
  l as LockKeyOpen
};
