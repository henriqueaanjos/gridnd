var p = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (m, e, o) => e in m ? p(m, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : m[e] = o, t = (m, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && i(m, o, e[o]);
  if (r)
    for (var o of r(e))
      c.call(e, o) && i(m, o, e[o]);
  return m;
}, a = (m, e) => f(m, n(e));
import l, { forwardRef as d } from "react";
import k from "../lib/IconBase.mjs";
import w from "../defs/LinkSimple.mjs";
const I = d((m, e) => /* @__PURE__ */ l.createElement(k, a(t({ ref: e }, m), { weights: w })));
I.displayName = "LinkSimple";
export {
  I as LinkSimple
};
