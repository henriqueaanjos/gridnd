var p = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var s = (o, e, r) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, t = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && s(o, r, e[r]);
  if (a)
    for (var r of a(e))
      l.call(e, r) && s(o, r, e[r]);
  return o;
}, m = (o, e) => f(o, i(e));
import h, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/GpsSlash.mjs";
const G = n((o, e) => /* @__PURE__ */ h.createElement(d, m(t({ ref: e }, o), { weights: w })));
G.displayName = "GpsSlash";
export {
  G as GpsSlash
};
