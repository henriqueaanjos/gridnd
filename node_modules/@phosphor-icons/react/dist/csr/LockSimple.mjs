var p = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (o, e, m) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : o[e] = m, a = (o, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && t(o, m, e[m]);
  if (r)
    for (var m of r(e))
      l.call(e, m) && t(o, m, e[m]);
  return o;
}, i = (o, e) => c(o, f(e));
import n, { forwardRef as d } from "react";
import k from "../lib/IconBase.mjs";
import w from "../defs/LockSimple.mjs";
const I = d((o, e) => /* @__PURE__ */ n.createElement(k, i(a({ ref: e }, o), { weights: w })));
I.displayName = "LockSimple";
export {
  I as LockSimple
};
