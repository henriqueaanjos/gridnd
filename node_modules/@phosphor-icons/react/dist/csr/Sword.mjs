var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (r, o, e) => o in r ? i(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, a = (r, o) => {
  for (var e in o || (o = {}))
    c.call(o, e) && m(r, e, o[e]);
  if (t)
    for (var e of t(o))
      d.call(o, e) && m(r, e, o[e]);
  return r;
}, f = (r, o) => p(r, s(o));
import w, { forwardRef as n } from "react";
import l from "../lib/IconBase.mjs";
import I from "../defs/Sword.mjs";
const R = n((r, o) => /* @__PURE__ */ w.createElement(l, f(a({ ref: o }, r), { weights: I })));
R.displayName = "Sword";
export {
  R as Sword
};
