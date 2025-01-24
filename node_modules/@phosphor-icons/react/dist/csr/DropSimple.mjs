var i = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, t = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && p(o, r, e[r]);
  if (m)
    for (var r of m(e))
      l.call(e, r) && p(o, r, e[r]);
  return o;
}, a = (o, e) => f(o, s(e));
import n, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import D from "../defs/DropSimple.mjs";
const I = d((o, e) => /* @__PURE__ */ n.createElement(w, a(t({ ref: e }, o), { weights: D })));
I.displayName = "DropSimple";
export {
  I as DropSimple
};
