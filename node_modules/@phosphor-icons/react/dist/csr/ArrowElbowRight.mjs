var w = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (r, o, t) => o in r ? w(r, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[o] = t, a = (r, o) => {
  for (var t in o || (o = {}))
    s.call(o, t) && m(r, t, o[t]);
  if (e)
    for (var t of e(o))
      c.call(o, t) && m(r, t, o[t]);
  return r;
}, i = (r, o) => f(r, p(o));
import l, { forwardRef as R } from "react";
import g from "../lib/IconBase.mjs";
import h from "../defs/ArrowElbowRight.mjs";
const n = R((r, o) => /* @__PURE__ */ l.createElement(g, i(a({ ref: o }, r), { weights: h })));
n.displayName = "ArrowElbowRight";
export {
  n as ArrowElbowRight
};
