var i = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var p = (o, e, m) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : o[e] = m, t = (o, e) => {
  for (var m in e || (e = {}))
    n.call(e, m) && p(o, m, e[m]);
  if (r)
    for (var m of r(e))
      s.call(e, m) && p(o, m, e[m]);
  return o;
}, a = (o, e) => c(o, f(e));
import l, { forwardRef as d } from "react";
import k from "../lib/IconBase.mjs";
import w from "../defs/LockSimpleOpen.mjs";
const I = d((o, e) => /* @__PURE__ */ l.createElement(k, a(t({ ref: e }, o), { weights: w })));
I.displayName = "LockSimpleOpen";
export {
  I as LockSimpleOpen
};
