var t = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (r, e, a) => e in r ? t(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, o = (r, e) => {
  for (var a in e || (e = {}))
    l.call(e, a) && i(r, a, e[a]);
  if (m)
    for (var a of m(e))
      n.call(e, a) && i(r, a, e[a]);
  return r;
}, p = (r, e) => f(r, s(e));
import S, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/MapPinSimpleArea.mjs";
const w = c((r, e) => /* @__PURE__ */ S.createElement(R, p(o({ ref: e }, r), { weights: d })));
w.displayName = "MapPinSimpleArea";
export {
  w as MapPinSimpleArea
};
