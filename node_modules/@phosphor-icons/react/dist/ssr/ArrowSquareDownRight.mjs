var w = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var a = (o, r, e) => r in o ? w(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, m = (o, r) => {
  for (var e in r || (r = {}))
    s.call(r, e) && a(o, e, r[e]);
  if (t)
    for (var e of t(r))
      R.call(r, e) && a(o, e, r[e]);
  return o;
}, i = (o, r) => f(o, p(r));
import n, { forwardRef as S } from "react";
import c from "../lib/SSRBase.mjs";
import g from "../defs/ArrowSquareDownRight.mjs";
const h = S((o, r) => /* @__PURE__ */ n.createElement(c, i(m({ ref: r }, o), { weights: g })));
h.displayName = "ArrowSquareDownRight";
export {
  h as ArrowSquareDownRight
};
