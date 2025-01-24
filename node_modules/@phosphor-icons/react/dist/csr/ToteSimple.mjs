var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var r = (o, e, t) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, a = (o, e) => {
  for (var t in e || (e = {}))
    c.call(e, t) && r(o, t, e[t]);
  if (m)
    for (var t of m(e))
      l.call(e, t) && r(o, t, e[t]);
  return o;
}, i = (o, e) => f(o, s(e));
import n, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/ToteSimple.mjs";
const R = d((o, e) => /* @__PURE__ */ n.createElement(w, i(a({ ref: e }, o), { weights: I })));
R.displayName = "ToteSimple";
export {
  R as ToteSimple
};
