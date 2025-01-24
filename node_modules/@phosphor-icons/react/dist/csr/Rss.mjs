var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && t(o, r, e[r]);
  if (s)
    for (var r of s(e))
      R.call(e, r) && t(o, r, e[r]);
  return o;
}, a = (o, e) => i(o, p(e));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Rss.mjs";
const I = d((o, e) => /* @__PURE__ */ n.createElement(l, a(m({ ref: e }, o), { weights: w })));
I.displayName = "Rss";
export {
  I as Rss
};
