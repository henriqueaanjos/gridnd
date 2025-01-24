var p = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var r = (t, o, e) => o in t ? p(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, i = (t, o) => {
  for (var e in o || (o = {}))
    n.call(o, e) && r(t, e, o[e]);
  if (m)
    for (var e of m(o))
      s.call(o, e) && r(t, e, o[e]);
  return t;
}, a = (t, o) => l(t, f(o));
import c, { forwardRef as g } from "react";
import B from "../lib/IconBase.mjs";
import d from "../defs/AlignBottomSimple.mjs";
const w = g((t, o) => /* @__PURE__ */ c.createElement(B, a(i({ ref: o }, t), { weights: d })));
w.displayName = "AlignBottomSimple";
export {
  w as AlignBottomSimple
};
