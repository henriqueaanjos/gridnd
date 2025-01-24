var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var R = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var a = (t, o, e) => o in t ? f(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, m = (t, o) => {
  for (var e in o || (o = {}))
    R.call(o, e) && a(t, e, o[e]);
  if (r)
    for (var e of r(o))
      d.call(o, e) && a(t, e, o[e]);
  return t;
}, i = (t, o) => p(t, s(o));
import n, { forwardRef as c } from "react";
import B from "../lib/SSRBase.mjs";
import l from "../defs/RadioButton.mjs";
const u = c((t, o) => /* @__PURE__ */ n.createElement(B, i(m({ ref: o }, t), { weights: l })));
u.displayName = "RadioButton";
export {
  u as RadioButton
};
