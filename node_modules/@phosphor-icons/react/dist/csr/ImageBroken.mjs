var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, t = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && a(o, r, e[r]);
  if (m)
    for (var r of m(e))
      c.call(e, r) && a(o, r, e[r]);
  return o;
}, f = (o, e) => n(o, p(e));
import I, { forwardRef as g } from "react";
import B from "../lib/IconBase.mjs";
import d from "../defs/ImageBroken.mjs";
const k = g((o, e) => /* @__PURE__ */ I.createElement(B, f(t({ ref: e }, o), { weights: d })));
k.displayName = "ImageBroken";
export {
  k as ImageBroken
};
