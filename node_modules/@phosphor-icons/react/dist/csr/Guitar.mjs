var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (t, r, e) => r in t ? f(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, m = (t, r) => {
  for (var e in r || (r = {}))
    c.call(r, e) && a(t, e, r[e]);
  if (o)
    for (var e of o(r))
      n.call(r, e) && a(t, e, r[e]);
  return t;
}, i = (t, r) => p(t, s(r));
import d, { forwardRef as l } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/Guitar.mjs";
const G = l((t, r) => /* @__PURE__ */ d.createElement(u, i(m({ ref: r }, t), { weights: w })));
G.displayName = "Guitar";
export {
  G as Guitar
};
