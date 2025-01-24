var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && t(r, o, e[o]);
  if (a)
    for (var o of a(e))
      d.call(e, o) && t(r, o, e[o]);
  return r;
}, i = (r, e) => p(r, s(e));
import n, { forwardRef as b } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Sidebar.mjs";
const I = b((r, e) => /* @__PURE__ */ n.createElement(l, i(m({ ref: e }, r), { weights: w })));
I.displayName = "Sidebar";
export {
  I as Sidebar
};
