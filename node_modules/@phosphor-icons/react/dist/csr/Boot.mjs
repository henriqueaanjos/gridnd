var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (t, o, e) => o in t ? i(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, a = (t, o) => {
  for (var e in o || (o = {}))
    c.call(o, e) && m(t, e, o[e]);
  if (r)
    for (var e of r(o))
      n.call(o, e) && m(t, e, o[e]);
  return t;
}, f = (t, o) => p(t, s(o));
import B, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Boot.mjs";
const I = d((t, o) => /* @__PURE__ */ B.createElement(l, f(a({ ref: o }, t), { weights: w })));
I.displayName = "Boot";
export {
  I as Boot
};
