var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (r, o, a) => o in r ? i(r, o, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[o] = a, m = (r, o) => {
  for (var a in o || (o = {}))
    c.call(o, a) && t(r, a, o[a]);
  if (e)
    for (var a of e(o))
      d.call(o, a) && t(r, a, o[a]);
  return r;
}, f = (r, o) => p(r, s(o));
import l, { forwardRef as h } from "react";
import n from "../lib/IconBase.mjs";
import b from "../defs/Chalkboard.mjs";
const k = h((r, o) => /* @__PURE__ */ l.createElement(n, f(m({ ref: o }, r), { weights: b })));
k.displayName = "Chalkboard";
export {
  k as Chalkboard
};
