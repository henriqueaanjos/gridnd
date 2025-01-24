var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      n.call(e, r) && t(o, r, e[r]);
  return o;
}, f = (o, e) => p(o, s(e));
import y, { forwardRef as B } from "react";
import b from "../lib/IconBase.mjs";
import d from "../defs/Baby.mjs";
const l = B((o, e) => /* @__PURE__ */ y.createElement(b, f(m({ ref: e }, o), { weights: d })));
l.displayName = "Baby";
export {
  l as Baby
};
