var c = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? c(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      s.call(e, r) && m(o, r, e[r]);
  return o;
}, i = (o, e) => f(o, n(e));
import d, { forwardRef as l } from "react";
import R from "../lib/IconBase.mjs";
import y from "../defs/VinylRecord.mjs";
const w = l((o, e) => /* @__PURE__ */ d.createElement(R, i(a({ ref: e }, o), { weights: y })));
w.displayName = "VinylRecord";
export {
  w as VinylRecord
};
