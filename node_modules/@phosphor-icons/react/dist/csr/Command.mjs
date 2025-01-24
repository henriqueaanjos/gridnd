var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (o, m, e) => m in o ? i(o, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[m] = e, t = (o, m) => {
  for (var e in m || (m = {}))
    s.call(m, e) && a(o, e, m[e]);
  if (r)
    for (var e of r(m))
      c.call(m, e) && a(o, e, m[e]);
  return o;
}, f = (o, m) => n(o, p(m));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import C from "../defs/Command.mjs";
const I = l((o, m) => /* @__PURE__ */ d.createElement(w, f(t({ ref: m }, o), { weights: C })));
I.displayName = "Command";
export {
  I as Command
};
