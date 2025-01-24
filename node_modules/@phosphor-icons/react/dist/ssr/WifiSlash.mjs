var f = Object.defineProperty, s = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, t = (r, e) => {
  for (var a in e || (e = {}))
    l.call(e, a) && o(r, a, e[a]);
  if (i)
    for (var a of i(e))
      S.call(e, a) && o(r, a, e[a]);
  return r;
}, m = (r, e) => s(r, p(e));
import c, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/WifiSlash.mjs";
const n = h((r, e) => /* @__PURE__ */ c.createElement(R, m(t({ ref: e }, r), { weights: d })));
n.displayName = "WifiSlash";
export {
  n as WifiSlash
};
