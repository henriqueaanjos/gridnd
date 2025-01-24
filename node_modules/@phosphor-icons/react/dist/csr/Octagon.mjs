var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (t, o, e) => o in t ? f(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, m = (t, o) => {
  for (var e in o || (o = {}))
    p.call(o, e) && a(t, e, o[e]);
  if (r)
    for (var e of r(o))
      s.call(o, e) && a(t, e, o[e]);
  return t;
}, c = (t, o) => i(t, n(o));
import g, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Octagon.mjs";
const I = d((t, o) => /* @__PURE__ */ g.createElement(l, c(m({ ref: o }, t), { weights: w })));
I.displayName = "Octagon";
export {
  I as Octagon
};
