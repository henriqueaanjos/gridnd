var w = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (r, o, e) => o in r ? w(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, a = (r, o) => {
  for (var e in o || (o = {}))
    p.call(o, e) && m(r, e, o[e]);
  if (t)
    for (var e of t(o))
      s.call(o, e) && m(r, e, o[e]);
  return r;
}, f = (r, o) => i(r, n(o));
import c, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import A from "../defs/ArrowULeftDown.mjs";
const D = d((r, o) => /* @__PURE__ */ c.createElement(l, f(a({ ref: o }, r), { weights: A })));
D.displayName = "ArrowULeftDown";
export {
  D as ArrowULeftDown
};
