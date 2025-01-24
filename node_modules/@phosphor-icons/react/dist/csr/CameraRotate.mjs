var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var r = (a, e, t) => e in a ? i(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t, m = (a, e) => {
  for (var t in e || (e = {}))
    c.call(e, t) && r(a, t, e[t]);
  if (o)
    for (var t of o(e))
      R.call(e, t) && r(a, t, e[t]);
  return a;
}, f = (a, e) => p(a, s(e));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/CameraRotate.mjs";
const C = d((a, e) => /* @__PURE__ */ n.createElement(l, f(m({ ref: e }, a), { weights: w })));
C.displayName = "CameraRotate";
export {
  C as CameraRotate
};
