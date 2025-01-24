var i = Object.defineProperty, p = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, s = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      l.call(e, r) && m(o, r, e[r]);
  return o;
}, a = (o, e) => p(o, f(e));
import h, { forwardRef as n } from "react";
import b from "../lib/IconBase.mjs";
import d from "../defs/GlobeHemisphereWest.mjs";
const w = n((o, e) => /* @__PURE__ */ h.createElement(b, a(s({ ref: e }, o), { weights: d })));
w.displayName = "GlobeHemisphereWest";
export {
  w as GlobeHemisphereWest
};
