var s = Object.defineProperty, f = Object.defineProperties;
var h = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (r, t, a) => t in r ? s(r, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[t] = a, m = (r, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && o(r, a, t[a]);
  if (e)
    for (var a of e(t))
      c.call(t, a) && o(r, a, t[a]);
  return r;
}, i = (r, t) => f(r, h(t));
import g, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/HashStraight.mjs";
const w = n((r, t) => /* @__PURE__ */ g.createElement(d, i(m({ ref: t }, r), { weights: l })));
w.displayName = "HashStraight";
export {
  w as HashStraight
};
