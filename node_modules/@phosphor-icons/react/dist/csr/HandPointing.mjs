var m = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (t, o, e) => o in t ? m(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, i = (t, o) => {
  for (var e in o || (o = {}))
    s.call(o, e) && a(t, e, o[e]);
  if (r)
    for (var e of r(o))
      c.call(o, e) && a(t, e, o[e]);
  return t;
}, n = (t, o) => f(t, p(o));
import d, { forwardRef as g } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/HandPointing.mjs";
const H = g((t, o) => /* @__PURE__ */ d.createElement(l, n(i({ ref: o }, t), { weights: w })));
H.displayName = "HandPointing";
export {
  H as HandPointing
};
