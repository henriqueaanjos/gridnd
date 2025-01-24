var s = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      R.call(e, o) && m(r, o, e[o]);
  return r;
}, i = (r, e) => c(r, f(e));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import v from "../defs/Devices.mjs";
const w = l((r, e) => /* @__PURE__ */ d.createElement(n, i(a({ ref: e }, r), { weights: v })));
w.displayName = "Devices";
export {
  w as Devices
};
