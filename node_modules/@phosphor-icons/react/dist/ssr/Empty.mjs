var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, y = Object.prototype.propertyIsEnumerable;
var o = (e, t, m) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[t] = m, a = (e, t) => {
  for (var m in t || (t = {}))
    c.call(t, m) && o(e, m, t[m]);
  if (r)
    for (var m of r(t))
      y.call(t, m) && o(e, m, t[m]);
  return e;
}, p = (e, t) => i(e, s(t));
import E, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/Empty.mjs";
const n = R((e, t) => /* @__PURE__ */ E.createElement(d, p(a({ ref: t }, e), { weights: l })));
n.displayName = "Empty";
export {
  n as Empty
};
