var n = Object.defineProperty, s = Object.defineProperties;
var w = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var a = (r, o, e) => o in r ? n(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, m = (r, o) => {
  for (var e in o || (o = {}))
    f.call(o, e) && a(r, e, o[e]);
  if (t)
    for (var e of t(o))
      p.call(o, e) && a(r, e, o[e]);
  return r;
}, i = (r, o) => s(r, w(o));
import c, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import A from "../defs/ArrowFatLinesDown.mjs";
const D = d((r, o) => /* @__PURE__ */ c.createElement(l, i(m({ ref: o }, r), { weights: A })));
D.displayName = "ArrowFatLinesDown";
export {
  D as ArrowFatLinesDown
};
