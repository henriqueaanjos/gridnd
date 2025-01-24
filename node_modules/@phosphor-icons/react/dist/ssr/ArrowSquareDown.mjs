var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (o, r, e) => r in o ? f(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, m = (o, r) => {
  for (var e in r || (r = {}))
    s.call(r, e) && t(o, e, r[e]);
  if (a)
    for (var e of a(r))
      n.call(r, e) && t(o, e, r[e]);
  return o;
}, w = (o, r) => i(o, p(r));
import S, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/ArrowSquareDown.mjs";
const l = c((o, r) => /* @__PURE__ */ S.createElement(R, w(m({ ref: r }, o), { weights: d })));
l.displayName = "ArrowSquareDown";
export {
  l as ArrowSquareDown
};
