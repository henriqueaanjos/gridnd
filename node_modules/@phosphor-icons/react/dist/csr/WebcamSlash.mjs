var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var r = (a, e, m) => e in a ? c(a, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : a[e] = m, t = (a, e) => {
  for (var m in e || (e = {}))
    p.call(e, m) && r(a, m, e[m]);
  if (o)
    for (var m of o(e))
      l.call(e, m) && r(a, m, e[m]);
  return a;
}, s = (a, e) => f(a, i(e));
import h, { forwardRef as n } from "react";
import b from "../lib/IconBase.mjs";
import d from "../defs/WebcamSlash.mjs";
const w = n((a, e) => /* @__PURE__ */ h.createElement(b, s(t({ ref: e }, a), { weights: d })));
w.displayName = "WebcamSlash";
export {
  w as WebcamSlash
};
