var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, t = (r, e) => {
  for (var a in e || (e = {}))
    c.call(e, a) && o(r, a, e[a]);
  if (m)
    for (var a of m(e))
      n.call(e, a) && o(r, a, e[a]);
  return r;
}, f = (r, e) => p(r, s(e));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import C from "../defs/Camera.mjs";
const I = l((r, e) => /* @__PURE__ */ d.createElement(w, f(t({ ref: e }, r), { weights: C })));
I.displayName = "Camera";
export {
  I as Camera
};
