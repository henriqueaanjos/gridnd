var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && t(o, r, e[r]);
  if (i)
    for (var r of i(e))
      n.call(e, r) && t(o, r, e[r]);
  return o;
}, a = (o, e) => f(o, s(e));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Tipi.mjs";
const R = l((o, e) => /* @__PURE__ */ d.createElement(w, a(m({ ref: e }, o), { weights: I })));
R.displayName = "Tipi";
export {
  R as Tipi
};
