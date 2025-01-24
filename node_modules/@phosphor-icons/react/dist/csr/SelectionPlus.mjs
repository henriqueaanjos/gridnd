var s = Object.defineProperty, c = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (o, e, t) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, a = (o, e) => {
  for (var t in e || (e = {}))
    f.call(e, t) && m(o, t, e[t]);
  if (r)
    for (var t of r(e))
      n.call(e, t) && m(o, t, e[t]);
  return o;
}, i = (o, e) => c(o, l(e));
import p, { forwardRef as d } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/SelectionPlus.mjs";
const I = d((o, e) => /* @__PURE__ */ p.createElement(u, i(a({ ref: e }, o), { weights: w })));
I.displayName = "SelectionPlus";
export {
  I as SelectionPlus
};
