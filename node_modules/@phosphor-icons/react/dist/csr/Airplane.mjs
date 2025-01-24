var p = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && t(r, o, e[o]);
  if (a)
    for (var o of a(e))
      c.call(e, o) && t(r, o, e[o]);
  return r;
}, i = (r, e) => f(r, n(e));
import l, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import A from "../defs/Airplane.mjs";
const I = d((r, e) => /* @__PURE__ */ l.createElement(w, i(m({ ref: e }, r), { weights: A })));
I.displayName = "Airplane";
export {
  I as Airplane
};
