var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (r, e, a) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, t = (r, e) => {
  for (var a in e || (e = {}))
    d.call(e, a) && m(r, a, e[a]);
  if (o)
    for (var a of o(e))
      c.call(e, a) && m(r, a, e[a]);
  return r;
}, i = (r, e) => p(r, s(e));
import R, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/VideoCamera.mjs";
const C = l((r, e) => /* @__PURE__ */ R.createElement(n, i(t({ ref: e }, r), { weights: w })));
C.displayName = "VideoCamera";
export {
  C as VideoCamera
};
