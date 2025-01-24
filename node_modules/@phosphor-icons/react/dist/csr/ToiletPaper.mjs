var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (o, e, r) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && a(o, r, e[r]);
  if (t)
    for (var r of t(e))
      l.call(e, r) && a(o, r, e[r]);
  return o;
}, i = (o, e) => f(o, s(e));
import n, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/ToiletPaper.mjs";
const P = d((o, e) => /* @__PURE__ */ n.createElement(w, i(m({ ref: e }, o), { weights: I })));
P.displayName = "ToiletPaper";
export {
  P as ToiletPaper
};
