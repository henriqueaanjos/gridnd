var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      l.call(e, r) && m(o, r, e[r]);
  return o;
}, f = (o, e) => p(o, s(e));
import h, { forwardRef as n } from "react";
import y from "../lib/IconBase.mjs";
import d from "../defs/Keyhole.mjs";
const w = n((o, e) => /* @__PURE__ */ h.createElement(y, f(a({ ref: e }, o), { weights: d })));
w.displayName = "Keyhole";
export {
  w as Keyhole
};
