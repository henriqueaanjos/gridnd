var f = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (t, o, e) => o in t ? f(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, m = (t, o) => {
  for (var e in o || (o = {}))
    s.call(o, e) && a(t, e, o[e]);
  if (r)
    for (var e of r(o))
      c.call(o, e) && a(t, e, o[e]);
  return t;
}, i = (t, o) => n(t, p(o));
import d, { forwardRef as R } from "react";
import B from "../lib/IconBase.mjs";
import l from "../defs/RadioButton.mjs";
const u = R((t, o) => /* @__PURE__ */ d.createElement(B, i(m({ ref: o }, t), { weights: l })));
u.displayName = "RadioButton";
export {
  u as RadioButton
};
