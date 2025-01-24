var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (m, e, o) => e in m ? p(m, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : m[e] = o, t = (m, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && a(m, o, e[o]);
  if (r)
    for (var o of r(e))
      l.call(e, o) && a(m, o, e[o]);
  return m;
}, i = (m, e) => f(m, s(e));
import g, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/TagSimple.mjs";
const I = n((m, e) => /* @__PURE__ */ g.createElement(d, i(t({ ref: e }, m), { weights: w })));
I.displayName = "TagSimple";
export {
  I as TagSimple
};
