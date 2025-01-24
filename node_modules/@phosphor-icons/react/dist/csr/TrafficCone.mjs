var i = Object.defineProperty, c = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var f = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, t = (o, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && f(o, r, e[r]);
  if (a)
    for (var r of a(e))
      s.call(e, r) && f(o, r, e[r]);
  return o;
}, m = (o, e) => c(o, n(e));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import C from "../defs/TrafficCone.mjs";
const I = l((o, e) => /* @__PURE__ */ d.createElement(w, m(t({ ref: e }, o), { weights: C })));
I.displayName = "TrafficCone";
export {
  I as TrafficCone
};
