var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var i = (t, r, e) => r in t ? s(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, m = (t, r) => {
  for (var e in r || (r = {}))
    c.call(r, e) && i(t, e, r[e]);
  if (o)
    for (var e of o(r))
      d.call(r, e) && i(t, e, r[e]);
  return t;
}, a = (t, r) => f(t, p(r));
import n, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import A from "../defs/FirstAid.mjs";
const F = l((t, r) => /* @__PURE__ */ n.createElement(w, a(m({ ref: r }, t), { weights: A })));
F.displayName = "FirstAid";
export {
  F as FirstAid
};
