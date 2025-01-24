var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? c(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      h.call(e, r) && m(o, r, e[r]);
  return o;
}, s = (o, e) => f(o, i(e));
import n, { forwardRef as d } from "react";
import k from "../lib/IconBase.mjs";
import l from "../defs/Checks.mjs";
const w = d((o, e) => /* @__PURE__ */ n.createElement(k, s(a({ ref: e }, o), { weights: l })));
w.displayName = "Checks";
export {
  w as Checks
};
