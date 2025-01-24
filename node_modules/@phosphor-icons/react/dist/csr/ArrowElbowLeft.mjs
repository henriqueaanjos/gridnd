var w = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (r, o, e) => o in r ? w(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, a = (r, o) => {
  for (var e in o || (o = {}))
    s.call(o, e) && m(r, e, o[e]);
  if (t)
    for (var e of t(o))
      c.call(o, e) && m(r, e, o[e]);
  return r;
}, f = (r, o) => i(r, p(o));
import l, { forwardRef as n } from "react";
import E from "../lib/IconBase.mjs";
import b from "../defs/ArrowElbowLeft.mjs";
const d = n((r, o) => /* @__PURE__ */ l.createElement(E, f(a({ ref: o }, r), { weights: b })));
d.displayName = "ArrowElbowLeft";
export {
  d as ArrowElbowLeft
};
