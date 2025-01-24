var p = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var r = (t, o, e) => o in t ? p(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, i = (t, o) => {
  for (var e in o || (o = {}))
    s.call(o, e) && r(t, e, o[e]);
  if (m)
    for (var e of m(o))
      n.call(o, e) && r(t, e, o[e]);
  return t;
}, a = (t, o) => l(t, f(o));
import S, { forwardRef as c } from "react";
import g from "../lib/SSRBase.mjs";
import B from "../defs/AlignBottomSimple.mjs";
const R = c((t, o) => /* @__PURE__ */ S.createElement(g, a(i({ ref: o }, t), { weights: B })));
R.displayName = "AlignBottomSimple";
export {
  R as AlignBottomSimple
};
