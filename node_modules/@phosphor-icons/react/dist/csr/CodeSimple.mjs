var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (o, e, m) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : o[e] = m, a = (o, e) => {
  for (var m in e || (e = {}))
    c.call(e, m) && t(o, m, e[m]);
  if (r)
    for (var m of r(e))
      d.call(e, m) && t(o, m, e[m]);
  return o;
}, i = (o, e) => f(o, s(e));
import l, { forwardRef as n } from "react";
import w from "../lib/IconBase.mjs";
import C from "../defs/CodeSimple.mjs";
const I = n((o, e) => /* @__PURE__ */ l.createElement(w, i(a({ ref: e }, o), { weights: C })));
I.displayName = "CodeSimple";
export {
  I as CodeSimple
};
