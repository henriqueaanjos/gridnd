var i = Object.defineProperty, p = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var s = (m, e, o) => e in m ? i(m, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : m[e] = o, t = (m, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && s(m, o, e[o]);
  if (r)
    for (var o of r(e))
      l.call(e, o) && s(m, o, e[o]);
  return m;
}, a = (m, e) => p(m, f(e));
import R, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/RssSimple.mjs";
const I = n((m, e) => /* @__PURE__ */ R.createElement(d, a(t({ ref: e }, m), { weights: w })));
I.displayName = "RssSimple";
export {
  I as RssSimple
};
