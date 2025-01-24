var p = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var t = (o, e, m) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : o[e] = m, a = (o, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && t(o, m, e[m]);
  if (r)
    for (var m of r(e))
      S.call(e, m) && t(o, m, e[m]);
  return o;
}, i = (o, e) => l(o, f(e));
import c, { forwardRef as R } from "react";
import b from "../lib/SSRBase.mjs";
import d from "../defs/GlobeSimpleX.mjs";
const n = R((o, e) => /* @__PURE__ */ c.createElement(b, i(a({ ref: e }, o), { weights: d })));
n.displayName = "GlobeSimpleX";
export {
  n as GlobeSimpleX
};
