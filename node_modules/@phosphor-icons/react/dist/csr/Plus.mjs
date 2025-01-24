var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      l.call(e, r) && m(o, r, e[r]);
  return o;
}, s = (o, e) => i(o, p(e));
import n, { forwardRef as d } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/Plus.mjs";
const I = d((o, e) => /* @__PURE__ */ n.createElement(u, s(a({ ref: e }, o), { weights: w })));
I.displayName = "Plus";
export {
  I as Plus
};
