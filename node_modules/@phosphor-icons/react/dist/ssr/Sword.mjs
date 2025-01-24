var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var m = (o, r, e) => r in o ? i(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, a = (o, r) => {
  for (var e in r || (r = {}))
    d.call(r, e) && m(o, e, r[e]);
  if (t)
    for (var e of t(r))
      w.call(r, e) && m(o, e, r[e]);
  return o;
}, f = (o, r) => p(o, s(r));
import S, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import l from "../defs/Sword.mjs";
const n = c((o, r) => /* @__PURE__ */ S.createElement(R, f(a({ ref: r }, o), { weights: l })));
n.displayName = "Sword";
export {
  n as Sword
};
