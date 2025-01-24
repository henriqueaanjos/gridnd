var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (m, e, r) => e in m ? i(m, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : m[e] = r, t = (m, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && a(m, r, e[r]);
  if (o)
    for (var r of o(e))
      n.call(e, r) && a(m, r, e[r]);
  return m;
}, f = (m, e) => p(m, s(e));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import H from "../defs/Hammer.mjs";
const I = l((m, e) => /* @__PURE__ */ d.createElement(w, f(t({ ref: e }, m), { weights: H })));
I.displayName = "Hammer";
export {
  I as Hammer
};
