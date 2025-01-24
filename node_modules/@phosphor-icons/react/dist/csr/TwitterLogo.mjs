var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var m = (t, o, e) => o in t ? f(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, a = (t, o) => {
  for (var e in o || (o = {}))
    c.call(o, e) && m(t, e, o[e]);
  if (r)
    for (var e of r(o))
      w.call(o, e) && m(t, e, o[e]);
  return t;
}, i = (t, o) => p(t, s(o));
import g, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/TwitterLogo.mjs";
const I = n((t, o) => /* @__PURE__ */ g.createElement(d, i(a({ ref: o }, t), { weights: l })));
I.displayName = "TwitterLogo";
export {
  I as TwitterLogo
};
