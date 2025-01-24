var i = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (o, e, m) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : o[e] = m, t = (o, e) => {
  for (var m in e || (e = {}))
    c.call(e, m) && p(o, m, e[m]);
  if (r)
    for (var m of r(e))
      l.call(e, m) && p(o, m, e[m]);
  return o;
}, a = (o, e) => f(o, s(e));
import n, { forwardRef as y } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/CopySimple.mjs";
const C = y((o, e) => /* @__PURE__ */ n.createElement(d, a(t({ ref: e }, o), { weights: w })));
C.displayName = "CopySimple";
export {
  C as CopySimple
};
