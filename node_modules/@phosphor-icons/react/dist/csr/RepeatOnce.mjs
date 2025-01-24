var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (t, e, o) => e in t ? c(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, m = (t, e) => {
  for (var o in e || (e = {}))
    n.call(e, o) && a(t, o, e[o]);
  if (r)
    for (var o of r(e))
      s.call(e, o) && a(t, o, e[o]);
  return t;
}, p = (t, e) => f(t, i(e));
import R, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/RepeatOnce.mjs";
const I = d((t, e) => /* @__PURE__ */ R.createElement(l, p(m({ ref: e }, t), { weights: w })));
I.displayName = "RepeatOnce";
export {
  I as RepeatOnce
};
