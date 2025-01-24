var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (t, o, e) => o in t ? f(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, a = (t, o) => {
  for (var e in o || (o = {}))
    n.call(o, e) && m(t, e, o[e]);
  if (r)
    for (var e of r(o))
      c.call(o, e) && m(t, e, o[e]);
  return t;
}, i = (t, o) => p(t, s(o));
import g, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import k from "../defs/CookingPot.mjs";
const l = R((t, o) => /* @__PURE__ */ g.createElement(d, i(a({ ref: o }, t), { weights: k })));
l.displayName = "CookingPot";
export {
  l as CookingPot
};
