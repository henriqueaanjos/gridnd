var f = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (t, r, e) => r in t ? f(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, i = (t, r) => {
  for (var e in r || (r = {}))
    s.call(r, e) && a(t, e, r[e]);
  if (o)
    for (var e of o(r))
      c.call(r, e) && a(t, e, r[e]);
  return t;
}, m = (t, r) => n(t, p(r));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Martini.mjs";
const M = l((t, r) => /* @__PURE__ */ d.createElement(w, m(i({ ref: r }, t), { weights: I })));
M.displayName = "Martini";
export {
  M as Martini
};
