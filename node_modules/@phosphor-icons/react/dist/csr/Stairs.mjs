var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (t, r, e) => r in t ? s(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, m = (t, r) => {
  for (var e in r || (r = {}))
    c.call(r, e) && a(t, e, r[e]);
  if (o)
    for (var e of o(r))
      n.call(r, e) && a(t, e, r[e]);
  return t;
}, i = (t, r) => f(t, p(r));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Stairs.mjs";
const R = l((t, r) => /* @__PURE__ */ d.createElement(w, i(m({ ref: r }, t), { weights: I })));
R.displayName = "Stairs";
export {
  R as Stairs
};
