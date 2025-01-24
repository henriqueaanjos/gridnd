var f = Object.defineProperty, h = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    n.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      p.call(e, r) && t(o, r, e[r]);
  return o;
}, s = (o, e) => h(o, i(e));
import c, { forwardRef as l } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/PhoneSlash.mjs";
const I = l((o, e) => /* @__PURE__ */ c.createElement(d, s(m({ ref: e }, o), { weights: w })));
I.displayName = "PhoneSlash";
export {
  I as PhoneSlash
};
