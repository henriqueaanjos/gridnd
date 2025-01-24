var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (t, e, o) => e in t ? c(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, m = (t, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && a(t, o, e[o]);
  if (r)
    for (var o of r(e))
      l.call(e, o) && a(t, o, e[o]);
  return t;
}, i = (t, e) => f(t, p(e));
import n, { forwardRef as b } from "react";
import d from "../lib/IconBase.mjs";
import v from "../defs/DeviceTablet.mjs";
const w = b((t, e) => /* @__PURE__ */ n.createElement(d, i(m({ ref: e }, t), { weights: v })));
w.displayName = "DeviceTablet";
export {
  w as DeviceTablet
};
