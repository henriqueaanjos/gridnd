var f = Object.defineProperty, n = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (t, e, i) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, m = (t, e) => {
  for (var i in e || (e = {}))
    p.call(e, i) && a(t, i, e[i]);
  if (r)
    for (var i of r(e))
      c.call(e, i) && a(t, i, e[i]);
  return t;
}, o = (t, e) => n(t, s(e));
import y, { forwardRef as I } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/Infinity.mjs";
const l = I((t, e) => /* @__PURE__ */ y.createElement(R, o(m({ ref: e }, t), { weights: d })));
l.displayName = "Infinity";
export {
  l as Infinity,
  l as Lemniscate
};
