var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var m = (r, o, e) => o in r ? f(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, a = (r, o) => {
  for (var e in o || (o = {}))
    c.call(o, e) && m(r, e, o[e]);
  if (t)
    for (var e of t(o))
      w.call(o, e) && m(r, e, o[e]);
  return r;
}, p = (r, o) => i(r, s(o));
import n, { forwardRef as x } from "react";
import B from "../lib/IconBase.mjs";
import d from "../defs/BoxArrowUp.mjs";
const l = x((r, o) => /* @__PURE__ */ n.createElement(B, p(a({ ref: o }, r), { weights: d })));
l.displayName = "BoxArrowUp";
export {
  l as BoxArrowUp
};
