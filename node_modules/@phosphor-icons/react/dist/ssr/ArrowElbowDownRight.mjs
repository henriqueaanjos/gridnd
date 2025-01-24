var i = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var m = (r, o, t) => o in r ? i(r, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[o] = t, w = (r, o) => {
  for (var t in o || (o = {}))
    s.call(o, t) && m(r, t, o[t]);
  if (e)
    for (var t of e(o))
      R.call(o, t) && m(r, t, o[t]);
  return r;
}, a = (r, o) => f(r, p(o));
import l, { forwardRef as n } from "react";
import c from "../lib/SSRBase.mjs";
import g from "../defs/ArrowElbowDownRight.mjs";
const h = n((r, o) => /* @__PURE__ */ l.createElement(c, a(w({ ref: o }, r), { weights: g })));
h.displayName = "ArrowElbowDownRight";
export {
  h as ArrowElbowDownRight
};
