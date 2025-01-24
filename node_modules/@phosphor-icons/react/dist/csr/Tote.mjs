var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (o, e, t) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, a = (o, e) => {
  for (var t in e || (e = {}))
    c.call(e, t) && m(o, t, e[t]);
  if (r)
    for (var t of r(e))
      n.call(e, t) && m(o, t, e[t]);
  return o;
}, f = (o, e) => p(o, s(e));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Tote.mjs";
const R = l((o, e) => /* @__PURE__ */ d.createElement(w, f(a({ ref: e }, o), { weights: I })));
R.displayName = "Tote";
export {
  R as Tote
};
