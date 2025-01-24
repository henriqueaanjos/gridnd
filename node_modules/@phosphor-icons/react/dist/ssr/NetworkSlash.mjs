var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var a = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    l.call(e, o) && a(r, o, e[o]);
  if (t)
    for (var o of t(e))
      w.call(e, o) && a(r, o, e[o]);
  return r;
}, s = (r, e) => i(r, p(e));
import S, { forwardRef as c } from "react";
import h from "../lib/SSRBase.mjs";
import N from "../defs/NetworkSlash.mjs";
const R = c((r, e) => /* @__PURE__ */ S.createElement(h, s(m({ ref: e }, r), { weights: N })));
R.displayName = "NetworkSlash";
export {
  R as NetworkSlash
};
