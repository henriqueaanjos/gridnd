var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (t, r, e) => r in t ? s(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, m = (t, r) => {
  for (var e in r || (r = {}))
    S.call(r, e) && o(t, e, r[e]);
  if (a)
    for (var e of a(r))
      c.call(r, e) && o(t, e, r[e]);
  return t;
}, i = (t, r) => f(t, p(r));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/Stairs.mjs";
const w = d((t, r) => /* @__PURE__ */ R.createElement(l, i(m({ ref: r }, t), { weights: n })));
w.displayName = "Stairs";
export {
  w as Stairs
};
