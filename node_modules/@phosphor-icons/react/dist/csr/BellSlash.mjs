var s = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, l = (o, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      c.call(e, r) && t(o, r, e[r]);
  return o;
}, m = (o, e) => f(o, i(e));
import h, { forwardRef as n } from "react";
import B from "../lib/IconBase.mjs";
import d from "../defs/BellSlash.mjs";
const w = n((o, e) => /* @__PURE__ */ h.createElement(B, m(l({ ref: e }, o), { weights: d })));
w.displayName = "BellSlash";
export {
  w as BellSlash
};
