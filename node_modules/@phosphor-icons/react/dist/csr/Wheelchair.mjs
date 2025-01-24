var c = Object.defineProperty, f = Object.defineProperties;
var h = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && t(r, o, e[o]);
  if (a)
    for (var o of a(e))
      s.call(e, o) && t(r, o, e[o]);
  return r;
}, i = (r, e) => f(r, h(e));
import l, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/Wheelchair.mjs";
const I = n((r, e) => /* @__PURE__ */ l.createElement(d, i(m({ ref: e }, r), { weights: w })));
I.displayName = "Wheelchair";
export {
  I as Wheelchair
};
