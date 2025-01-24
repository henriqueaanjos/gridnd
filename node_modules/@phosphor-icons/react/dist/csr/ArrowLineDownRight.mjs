var n = Object.defineProperty, w = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var i = (r, o, e) => o in r ? n(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, m = (r, o) => {
  for (var e in o || (o = {}))
    p.call(o, e) && i(r, e, o[e]);
  if (t)
    for (var e of t(o))
      s.call(o, e) && i(r, e, o[e]);
  return r;
}, a = (r, o) => w(r, f(o));
import c, { forwardRef as R } from "react";
import g from "../lib/IconBase.mjs";
import h from "../defs/ArrowLineDownRight.mjs";
const d = R((r, o) => /* @__PURE__ */ c.createElement(g, a(m({ ref: o }, r), { weights: h })));
d.displayName = "ArrowLineDownRight";
export {
  d as ArrowLineDownRight
};
