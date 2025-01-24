var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var y = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (m, e, o) => e in m ? s(m, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : m[e] = o, a = (m, e) => {
  for (var o in e || (e = {}))
    y.call(e, o) && t(m, o, e[o]);
  if (r)
    for (var o of r(e))
      c.call(e, o) && t(m, o, e[o]);
  return m;
}, i = (m, e) => f(m, p(e));
import l, { forwardRef as n } from "react";
import E from "../lib/IconBase.mjs";
import d from "../defs/SmileyXEyes.mjs";
const w = n((m, e) => /* @__PURE__ */ l.createElement(E, i(a({ ref: e }, m), { weights: d })));
w.displayName = "SmileyXEyes";
export {
  w as SmileyXEyes
};
