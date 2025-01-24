var c = Object.defineProperty, w = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (o, r, e) => r in o ? c(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, m = (o, r) => {
  for (var e in r || (r = {}))
    n.call(r, e) && i(o, e, r[e]);
  if (t)
    for (var e of t(r))
      p.call(r, e) && i(o, e, r[e]);
  return o;
}, a = (o, r) => w(o, f(r));
import s, { forwardRef as l } from "react";
import R from "../lib/IconBase.mjs";
import g from "../defs/ArrowCircleDownRight.mjs";
const h = l((o, r) => /* @__PURE__ */ s.createElement(R, a(m({ ref: r }, o), { weights: g })));
h.displayName = "ArrowCircleDownRight";
export {
  h as ArrowCircleDownRight
};
