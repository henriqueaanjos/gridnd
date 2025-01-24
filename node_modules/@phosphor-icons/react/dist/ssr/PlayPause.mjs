var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, P = Object.prototype.propertyIsEnumerable;
var t = (a, e, r) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : a[e] = r, m = (a, e) => {
  for (var r in e || (e = {}))
    l.call(e, r) && t(a, r, e[r]);
  if (o)
    for (var r of o(e))
      P.call(e, r) && t(a, r, e[r]);
  return a;
}, s = (a, e) => i(a, p(e));
import c, { forwardRef as y } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/PlayPause.mjs";
const n = y((a, e) => /* @__PURE__ */ c.createElement(R, s(m({ ref: e }, a), { weights: d })));
n.displayName = "PlayPause";
export {
  n as PlayPause
};
