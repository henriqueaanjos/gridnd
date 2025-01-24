var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (t, r, e) => r in t ? i(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, m = (t, r) => {
  for (var e in r || (r = {}))
    S.call(r, e) && o(t, e, r[e]);
  if (a)
    for (var e of a(r))
      c.call(r, e) && o(t, e, r[e]);
  return t;
}, f = (t, r) => p(t, s(r));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/Star.mjs";
const w = d((t, r) => /* @__PURE__ */ R.createElement(l, f(m({ ref: r }, t), { weights: n })));
w.displayName = "Star";
export {
  w as Star
};
