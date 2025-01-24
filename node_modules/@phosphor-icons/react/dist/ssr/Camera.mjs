var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, t = (r, e) => {
  for (var a in e || (e = {}))
    c.call(e, a) && o(r, a, e[a]);
  if (m)
    for (var a of m(e))
      R.call(e, a) && o(r, a, e[a]);
  return r;
}, f = (r, e) => p(r, s(e));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/Camera.mjs";
const C = l((r, e) => /* @__PURE__ */ d.createElement(n, f(t({ ref: e }, r), { weights: w })));
C.displayName = "Camera";
export {
  C as Camera
};
