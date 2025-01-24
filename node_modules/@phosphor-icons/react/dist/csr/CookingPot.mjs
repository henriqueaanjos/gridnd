var f = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (t, o, e) => o in t ? f(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, a = (t, o) => {
  for (var e in o || (o = {}))
    s.call(o, e) && m(t, e, o[e]);
  if (r)
    for (var e of r(o))
      c.call(o, e) && m(t, e, o[e]);
  return t;
}, i = (t, o) => n(t, p(o));
import g, { forwardRef as d } from "react";
import k from "../lib/IconBase.mjs";
import l from "../defs/CookingPot.mjs";
const w = d((t, o) => /* @__PURE__ */ g.createElement(k, i(a({ ref: o }, t), { weights: l })));
w.displayName = "CookingPot";
export {
  w as CookingPot
};
