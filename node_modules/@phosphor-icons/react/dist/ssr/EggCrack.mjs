var f = Object.defineProperty, g = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (e, r, a) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, m = (e, r) => {
  for (var a in r || (r = {}))
    p.call(r, a) && t(e, a, r[a]);
  if (o)
    for (var a of o(r))
      s.call(r, a) && t(e, a, r[a]);
  return e;
}, c = (e, r) => g(e, i(r));
import E, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import k from "../defs/EggCrack.mjs";
const l = R((e, r) => /* @__PURE__ */ E.createElement(d, c(m({ ref: r }, e), { weights: k })));
l.displayName = "EggCrack";
export {
  l as EggCrack
};
