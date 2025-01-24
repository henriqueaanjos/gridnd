var m = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (r, o, e) => o in r ? m(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, i = (r, o) => {
  for (var e in o || (o = {}))
    p.call(o, e) && a(r, e, o[e]);
  if (t)
    for (var e of t(o))
      c.call(o, e) && a(r, e, o[e]);
  return r;
}, n = (r, o) => s(r, f(o));
import l, { forwardRef as w } from "react";
import I from "../lib/IconBase.mjs";
import d from "../defs/ArrowsInLineHorizontal.mjs";
const z = w((r, o) => /* @__PURE__ */ l.createElement(I, n(i({ ref: o }, r), { weights: d })));
z.displayName = "ArrowsInLineHorizontal";
export {
  z as ArrowsInLineHorizontal
};
