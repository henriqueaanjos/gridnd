var w = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (e, r, o) => r in e ? w(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    s.call(r, o) && a(e, o, r[o]);
  if (t)
    for (var o of t(r))
      n.call(r, o) && a(e, o, r[o]);
  return e;
}, f = (e, r) => i(e, p(r));
import S, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/ArrowSquareDownLeft.mjs";
const l = c((e, r) => /* @__PURE__ */ S.createElement(R, f(m({ ref: r }, e), { weights: d })));
l.displayName = "ArrowSquareDownLeft";
export {
  l as ArrowSquareDownLeft
};
