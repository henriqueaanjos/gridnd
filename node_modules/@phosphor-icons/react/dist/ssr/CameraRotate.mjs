var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var R = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (a, e, t) => e in a ? i(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t, m = (a, e) => {
  for (var t in e || (e = {}))
    R.call(e, t) && o(a, t, e[t]);
  if (r)
    for (var t of r(e))
      c.call(e, t) && o(a, t, e[t]);
  return a;
}, f = (a, e) => p(a, s(e));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/CameraRotate.mjs";
const C = l((a, e) => /* @__PURE__ */ d.createElement(n, f(m({ ref: e }, a), { weights: w })));
C.displayName = "CameraRotate";
export {
  C as CameraRotate
};
