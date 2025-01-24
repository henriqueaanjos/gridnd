var n = Object.defineProperty, w = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (r, o, e) => o in r ? n(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, a = (r, o) => {
  for (var e in o || (o = {}))
    p.call(o, e) && m(r, e, o[e]);
  if (t)
    for (var e of t(o))
      s.call(o, e) && m(r, e, o[e]);
  return r;
}, i = (r, o) => w(r, f(o));
import c, { forwardRef as d } from "react";
import R from "../lib/IconBase.mjs";
import g from "../defs/ArrowBendRightDown.mjs";
const h = d((r, o) => /* @__PURE__ */ c.createElement(R, i(a({ ref: o }, r), { weights: g })));
h.displayName = "ArrowBendRightDown";
export {
  h as ArrowBendRightDown
};
