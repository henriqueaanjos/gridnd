var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var r = (e, t, m) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[t] = m, a = (e, t) => {
  for (var m in t || (t = {}))
    c.call(t, m) && r(e, m, t[m]);
  if (o)
    for (var m of o(t))
      n.call(t, m) && r(e, m, t[m]);
  return e;
}, p = (e, t) => i(e, s(t));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Stamp.mjs";
const R = l((e, t) => /* @__PURE__ */ d.createElement(w, p(a({ ref: t }, e), { weights: I })));
R.displayName = "Stamp";
export {
  R as Stamp
};
