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
import S, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import k from "../defs/LockSimple.mjs";
const n = R((o, e) => /* @__PURE__ */ S.createElement(d, i(a({ ref: e }, o), { weights: k })));
n.displayName = "LockSimple";
export {
  n as LockSimple
};
