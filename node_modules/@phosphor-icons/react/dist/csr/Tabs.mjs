var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      n.call(e, r) && t(o, r, e[r]);
  return o;
}, s = (o, e) => i(o, p(e));
import b, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Tabs.mjs";
const I = d((o, e) => /* @__PURE__ */ b.createElement(l, s(m({ ref: e }, o), { weights: w })));
I.displayName = "Tabs";
export {
  I as Tabs
};
