var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (o, m, e) => m in o ? i(o, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[m] = e, t = (o, m) => {
  for (var e in m || (m = {}))
    d.call(m, e) && a(o, e, m[e]);
  if (r)
    for (var e of r(m))
      n.call(m, e) && a(o, e, m[e]);
  return o;
}, f = (o, m) => p(o, s(m));
import c, { forwardRef as R } from "react";
import l from "../lib/SSRBase.mjs";
import w from "../defs/Command.mjs";
const C = R((o, m) => /* @__PURE__ */ c.createElement(l, f(t({ ref: m }, o), { weights: w })));
C.displayName = "Command";
export {
  C as Command
};
