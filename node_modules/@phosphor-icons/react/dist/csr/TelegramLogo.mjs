var g = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (o, e, r) => e in o ? g(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, t = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && a(o, r, e[r]);
  if (m)
    for (var r of m(e))
      c.call(e, r) && a(o, r, e[r]);
  return o;
}, f = (o, e) => i(o, p(e));
import l, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/TelegramLogo.mjs";
const I = n((o, e) => /* @__PURE__ */ l.createElement(d, f(t({ ref: e }, o), { weights: w })));
I.displayName = "TelegramLogo";
export {
  I as TelegramLogo
};
