var m = Object.defineProperty, c = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var f = (e, r, o) => r in e ? m(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, i = (e, r) => {
  for (var o in r || (r = {}))
    p.call(r, o) && f(e, o, r[o]);
  if (a)
    for (var o of a(r))
      s.call(r, o) && f(e, o, r[o]);
  return e;
}, t = (e, r) => c(e, n(r));
import g, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/TrafficSign.mjs";
const I = d((e, r) => /* @__PURE__ */ g.createElement(l, t(i({ ref: r }, e), { weights: w })));
I.displayName = "TrafficSign";
export {
  I as TrafficSign
};
