var g = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? g(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      c.call(e, r) && m(o, r, e[r]);
  return o;
}, f = (o, e) => i(o, p(e));
import n, { forwardRef as E } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/Egg.mjs";
const w = E((o, e) => /* @__PURE__ */ n.createElement(d, f(a({ ref: e }, o), { weights: l })));
w.displayName = "Egg";
export {
  w as Egg
};
