var s = Object.defineProperty, c = Object.defineProperties;
var w = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (r, o, e) => o in r ? s(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, a = (r, o) => {
  for (var e in o || (o = {}))
    f.call(o, e) && m(r, e, o[e]);
  if (t)
    for (var e of t(o))
      p.call(o, e) && m(r, e, o[e]);
  return r;
}, i = (r, o) => c(r, w(o));
import l, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import k from "../defs/ArrowClockwise.mjs";
const A = n((r, o) => /* @__PURE__ */ l.createElement(d, i(a({ ref: o }, r), { weights: k })));
A.displayName = "ArrowClockwise";
export {
  A as ArrowClockwise
};
