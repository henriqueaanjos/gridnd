var f = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var r = (t, o, e) => o in t ? f(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, a = (t, o) => {
  for (var e in o || (o = {}))
    s.call(o, e) && r(t, e, o[e]);
  if (m)
    for (var e of m(o))
      c.call(o, e) && r(t, e, o[e]);
  return t;
}, i = (t, o) => n(t, p(o));
import l, { forwardRef as g } from "react";
import B from "../lib/IconBase.mjs";
import d from "../defs/AlignBottom.mjs";
const w = g((t, o) => /* @__PURE__ */ l.createElement(B, i(a({ ref: o }, t), { weights: d })));
w.displayName = "AlignBottom";
export {
  w as AlignBottom
};
