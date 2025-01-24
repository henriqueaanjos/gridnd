var i = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (r, o, t) => o in r ? i(r, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[o] = t, w = (r, o) => {
  for (var t in o || (o = {}))
    p.call(o, t) && m(r, t, o[t]);
  if (e)
    for (var t of e(o))
      s.call(o, t) && m(r, t, o[t]);
  return r;
}, a = (r, o) => f(r, n(o));
import c, { forwardRef as l } from "react";
import R from "../lib/IconBase.mjs";
import g from "../defs/ArrowElbowDownRight.mjs";
const h = l((r, o) => /* @__PURE__ */ c.createElement(R, a(w({ ref: o }, r), { weights: g })));
h.displayName = "ArrowElbowDownRight";
export {
  h as ArrowElbowDownRight
};
