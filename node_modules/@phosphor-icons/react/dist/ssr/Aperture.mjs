var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var m = (r, e, t) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, a = (r, e) => {
  for (var t in e || (e = {}))
    c.call(e, t) && m(r, t, e[t]);
  if (o)
    for (var t of o(e))
      R.call(e, t) && m(r, t, e[t]);
  return r;
}, p = (r, e) => i(r, s(e));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import u from "../defs/Aperture.mjs";
const w = l((r, e) => /* @__PURE__ */ d.createElement(n, p(a({ ref: e }, r), { weights: u })));
w.displayName = "Aperture";
export {
  w as Aperture
};
