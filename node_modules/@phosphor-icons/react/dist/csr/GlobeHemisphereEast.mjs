var i = Object.defineProperty, p = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      l.call(e, r) && m(o, r, e[r]);
  return o;
}, s = (o, e) => p(o, f(e));
import h, { forwardRef as n } from "react";
import E from "../lib/IconBase.mjs";
import b from "../defs/GlobeHemisphereEast.mjs";
const d = n((o, e) => /* @__PURE__ */ h.createElement(E, s(a({ ref: e }, o), { weights: b })));
d.displayName = "GlobeHemisphereEast";
export {
  d as GlobeHemisphereEast
};
