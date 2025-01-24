var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var o = (t, r, e) => r in t ? f(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, m = (t, r) => {
  for (var e in r || (r = {}))
    c.call(r, e) && o(t, e, r[e]);
  if (a)
    for (var e of a(r))
      R.call(r, e) && o(t, e, r[e]);
  return t;
}, i = (t, r) => p(t, s(r));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import u from "../defs/Guitar.mjs";
const w = l((t, r) => /* @__PURE__ */ d.createElement(n, i(m({ ref: r }, t), { weights: u })));
w.displayName = "Guitar";
export {
  w as Guitar
};
