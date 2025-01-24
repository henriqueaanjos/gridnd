var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var t = (e, i, o) => i in e ? f(e, i, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[i] = o, m = (e, i) => {
  for (var o in i || (i = {}))
    c.call(i, o) && t(e, o, i[o]);
  if (r)
    for (var o of r(i))
      g.call(i, o) && t(e, o, i[o]);
  return e;
}, a = (e, i) => p(e, s(i));
import h, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/WifiHigh.mjs";
const w = n((e, i) => /* @__PURE__ */ h.createElement(d, a(m({ ref: i }, e), { weights: l })));
w.displayName = "WifiHigh";
export {
  w as WifiHigh
};
