var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var m = (o, r, e) => r in o ? i(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, a = (o, r) => {
  for (var e in r || (r = {}))
    c.call(r, e) && m(o, e, r[e]);
  if (t)
    for (var e of t(r))
      R.call(r, e) && m(o, e, r[e]);
  return o;
}, f = (o, r) => p(o, s(r));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import u from "../defs/FourK.mjs";
const w = l((o, r) => /* @__PURE__ */ d.createElement(n, f(a({ ref: r }, o), { weights: u })));
w.displayName = "FourK";
export {
  w as FourK
};
