var g = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (o, e, r) => e in o ? g(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, t = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && a(o, r, e[r]);
  if (m)
    for (var r of m(e))
      l.call(e, r) && a(o, r, e[r]);
  return o;
}, f = (o, e) => i(o, p(e));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/TelegramLogo.mjs";
const w = R((o, e) => /* @__PURE__ */ c.createElement(d, f(t({ ref: e }, o), { weights: n })));
w.displayName = "TelegramLogo";
export {
  w as TelegramLogo
};
