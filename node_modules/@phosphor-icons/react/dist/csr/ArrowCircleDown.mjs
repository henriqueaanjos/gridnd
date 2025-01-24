var c = Object.defineProperty, w = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (o, r, e) => r in o ? c(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, a = (o, r) => {
  for (var e in r || (r = {}))
    n.call(r, e) && m(o, e, r[e]);
  if (t)
    for (var e of t(r))
      p.call(r, e) && m(o, e, r[e]);
  return o;
}, i = (o, r) => w(o, f(r));
import s, { forwardRef as l } from "react";
import d from "../lib/IconBase.mjs";
import A from "../defs/ArrowCircleDown.mjs";
const C = l((o, r) => /* @__PURE__ */ s.createElement(d, i(a({ ref: r }, o), { weights: A })));
C.displayName = "ArrowCircleDown";
export {
  C as ArrowCircleDown
};
