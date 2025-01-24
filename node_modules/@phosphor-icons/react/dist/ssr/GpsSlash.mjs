var p = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var s = (r, e, a) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, t = (r, e) => {
  for (var a in e || (e = {}))
    l.call(e, a) && s(r, a, e[a]);
  if (o)
    for (var a of o(e))
      S.call(e, a) && s(r, a, e[a]);
  return r;
}, m = (r, e) => f(r, i(e));
import c, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/GpsSlash.mjs";
const n = h((r, e) => /* @__PURE__ */ c.createElement(R, m(t({ ref: e }, r), { weights: d })));
n.displayName = "GpsSlash";
export {
  n as GpsSlash
};
