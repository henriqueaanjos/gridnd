var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (t, o, e) => o in t ? s(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, a = (t, o) => {
  for (var e in o || (o = {}))
    c.call(o, e) && m(t, e, o[e]);
  if (r)
    for (var e of r(o))
      n.call(o, e) && m(t, e, o[e]);
  return t;
}, i = (t, o) => f(t, p(o));
import x, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/DotsSix.mjs";
const D = d((t, o) => /* @__PURE__ */ x.createElement(l, i(a({ ref: o }, t), { weights: w })));
D.displayName = "DotsSix";
export {
  D as DotsSix
};
