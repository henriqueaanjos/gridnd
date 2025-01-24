var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && t(o, r, e[r]);
  if (m)
    for (var r of m(e))
      w.call(e, r) && t(o, r, e[r]);
  return o;
}, f = (o, e) => p(o, s(e));
import n, { forwardRef as N } from "react";
import b from "../lib/IconBase.mjs";
import d from "../defs/NumberTwo.mjs";
const l = N((o, e) => /* @__PURE__ */ n.createElement(b, f(a({ ref: e }, o), { weights: d })));
l.displayName = "NumberTwo";
export {
  l as NumberTwo
};
