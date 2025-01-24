var f = Object.defineProperty, s = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var i = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, t = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && i(o, r, e[r]);
  if (a)
    for (var r of a(e))
      l.call(e, r) && i(o, r, e[r]);
  return o;
}, m = (o, e) => s(o, p(e));
import h, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/WifiSlash.mjs";
const I = n((o, e) => /* @__PURE__ */ h.createElement(d, m(t({ ref: e }, o), { weights: w })));
I.displayName = "WifiSlash";
export {
  I as WifiSlash
};
