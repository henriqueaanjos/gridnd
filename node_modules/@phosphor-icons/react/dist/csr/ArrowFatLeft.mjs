var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var a = (t, r, e) => r in t ? i(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, m = (t, r) => {
  for (var e in r || (r = {}))
    c.call(r, e) && a(t, e, r[e]);
  if (o)
    for (var e of o(r))
      w.call(r, e) && a(t, e, r[e]);
  return t;
}, f = (t, r) => p(t, s(r));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import A from "../defs/ArrowFatLeft.mjs";
const F = d((t, r) => /* @__PURE__ */ n.createElement(l, f(m({ ref: r }, t), { weights: A })));
F.displayName = "ArrowFatLeft";
export {
  F as ArrowFatLeft
};
