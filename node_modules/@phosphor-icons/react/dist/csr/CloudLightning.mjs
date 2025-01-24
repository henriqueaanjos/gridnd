var n = Object.defineProperty, f = Object.defineProperties;
var g = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var i = (t, o, e) => o in t ? n(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, m = (t, o) => {
  for (var e in o || (o = {}))
    p.call(o, e) && i(t, e, o[e]);
  if (r)
    for (var e of r(o))
      s.call(o, e) && i(t, e, o[e]);
  return t;
}, a = (t, o) => f(t, g(o));
import c, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import h from "../defs/CloudLightning.mjs";
const u = d((t, o) => /* @__PURE__ */ c.createElement(l, a(m({ ref: o }, t), { weights: h })));
u.displayName = "CloudLightning";
export {
  u as CloudLightning
};
