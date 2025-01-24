var i = Object.defineProperty, c = Object.defineProperties;
var w = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var t = (r, o, e) => o in r ? i(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, m = (r, o) => {
  for (var e in o || (o = {}))
    f.call(o, e) && t(r, e, o[e]);
  if (s)
    for (var e of s(o))
      p.call(o, e) && t(r, e, o[e]);
  return r;
}, a = (r, o) => c(r, w(o));
import l, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import k from "../defs/ArrowsClockwise.mjs";
const A = n((r, o) => /* @__PURE__ */ l.createElement(d, a(m({ ref: o }, r), { weights: k })));
A.displayName = "ArrowsClockwise";
export {
  A as ArrowsClockwise
};
