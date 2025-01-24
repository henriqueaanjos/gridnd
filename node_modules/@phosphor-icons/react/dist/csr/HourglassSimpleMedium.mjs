var t = Object.defineProperty, p = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (m, e, o) => e in m ? t(m, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : m[e] = o, i = (m, e) => {
  for (var o in e || (e = {}))
    f.call(e, o) && a(m, o, e[o]);
  if (r)
    for (var o of r(e))
      c.call(e, o) && a(m, o, e[o]);
  return m;
}, s = (m, e) => p(m, l(e));
import d, { forwardRef as u } from "react";
import g from "../lib/IconBase.mjs";
import n from "../defs/HourglassSimpleMedium.mjs";
const w = u((m, e) => /* @__PURE__ */ d.createElement(g, s(i({ ref: e }, m), { weights: n })));
w.displayName = "HourglassSimpleMedium";
export {
  w as HourglassSimpleMedium
};
