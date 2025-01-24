var p = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (o, e, m) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : o[e] = m, a = (o, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && t(o, m, e[m]);
  if (r)
    for (var m of r(e))
      c.call(e, m) && t(o, m, e[m]);
  return o;
}, i = (o, e) => l(o, f(e));
import n, { forwardRef as b } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/GlobeSimpleX.mjs";
const G = b((o, e) => /* @__PURE__ */ n.createElement(d, i(a({ ref: e }, o), { weights: w })));
G.displayName = "GlobeSimpleX";
export {
  G as GlobeSimpleX
};
