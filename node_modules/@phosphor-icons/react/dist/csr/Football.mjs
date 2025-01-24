var f = Object.defineProperty, i = Object.defineProperties;
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
}, l = (t, o) => i(t, p(o));
import n, { forwardRef as b } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/Football.mjs";
const F = b((t, o) => /* @__PURE__ */ n.createElement(d, l(m({ ref: o }, t), { weights: w })));
F.displayName = "Football";
export {
  F as Football
};
