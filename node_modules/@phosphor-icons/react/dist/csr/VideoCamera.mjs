var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, t = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && m(o, r, e[r]);
  if (a)
    for (var r of a(e))
      d.call(e, r) && m(o, r, e[r]);
  return o;
}, i = (o, e) => p(o, s(e));
import n, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import C from "../defs/VideoCamera.mjs";
const I = l((o, e) => /* @__PURE__ */ n.createElement(w, i(t({ ref: e }, o), { weights: C })));
I.displayName = "VideoCamera";
export {
  I as VideoCamera
};
