var g = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (r, o, e) => o in r ? g(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, m = (r, o) => {
  for (var e in o || (o = {}))
    p.call(o, e) && t(r, e, o[e]);
  if (a)
    for (var e of a(o))
      s.call(o, e) && t(r, e, o[e]);
  return r;
}, f = (r, o) => i(r, n(o));
import c, { forwardRef as l } from "react";
import d from "../lib/IconBase.mjs";
import u from "../defs/AngularLogo.mjs";
const w = l((r, o) => /* @__PURE__ */ c.createElement(d, f(m({ ref: o }, r), { weights: u })));
w.displayName = "AngularLogo";
export {
  w as AngularLogo
};
