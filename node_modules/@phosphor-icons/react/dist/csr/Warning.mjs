var n = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (e, r, o) => r in e ? n(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    s.call(r, o) && t(e, o, r[o]);
  if (a)
    for (var o of a(r))
      c.call(r, o) && t(e, o, r[o]);
  return e;
}, i = (e, r) => f(e, p(r));
import g, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Warning.mjs";
const I = d((e, r) => /* @__PURE__ */ g.createElement(l, i(m({ ref: r }, e), { weights: w })));
I.displayName = "Warning";
export {
  I as Warning
};
