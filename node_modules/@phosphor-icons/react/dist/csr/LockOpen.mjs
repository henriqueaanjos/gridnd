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
import d, { forwardRef as k } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/LockOpen.mjs";
const I = k((o, e) => /* @__PURE__ */ d.createElement(l, p(a({ ref: e }, o), { weights: w })));
I.displayName = "LockOpen";
export {
  I as LockOpen
};
