var p = Object.defineProperty, w = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (o, r, e) => r in o ? p(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, a = (o, r) => {
  for (var e in r || (r = {}))
    s.call(r, e) && m(o, e, r[e]);
  if (t)
    for (var e of t(r))
      l.call(r, e) && m(o, e, r[e]);
  return o;
}, f = (o, r) => w(o, i(r));
import c, { forwardRef as E } from "react";
import R from "../lib/SSRBase.mjs";
import b from "../defs/ArrowElbowUpLeft.mjs";
const d = E((o, r) => /* @__PURE__ */ c.createElement(R, f(a({ ref: r }, o), { weights: b })));
d.displayName = "ArrowElbowUpLeft";
export {
  d as ArrowElbowUpLeft
};
