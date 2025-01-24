var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var i = (r, e, m) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, t = (r, e) => {
  for (var m in e || (e = {}))
    c.call(e, m) && i(r, m, e[m]);
  if (o)
    for (var m of o(e))
      l.call(e, m) && i(r, m, e[m]);
  return r;
}, a = (r, e) => f(r, s(e));
import n, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import F from "../defs/FireSimple.mjs";
const I = d((r, e) => /* @__PURE__ */ n.createElement(w, a(t({ ref: e }, r), { weights: F })));
I.displayName = "FireSimple";
export {
  I as FireSimple
};
