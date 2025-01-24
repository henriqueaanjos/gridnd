var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var a = (t, e, o) => e in t ? c(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, m = (t, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && a(t, o, e[o]);
  if (r)
    for (var o of r(e))
      R.call(e, o) && a(t, o, e[o]);
  return t;
}, i = (t, e) => f(t, p(e));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import v from "../defs/DeviceRotate.mjs";
const w = l((t, e) => /* @__PURE__ */ d.createElement(n, i(m({ ref: e }, t), { weights: v })));
w.displayName = "DeviceRotate";
export {
  w as DeviceRotate
};
