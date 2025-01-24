var s = Object.defineProperty, f = Object.defineProperties;
var h = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (o, e, t) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, a = (o, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && m(o, t, e[t]);
  if (r)
    for (var t of r(e))
      c.call(e, t) && m(o, t, e[t]);
  return o;
}, i = (o, e) => f(o, h(e));
import g, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/Lighthouse.mjs";
const n = R((o, e) => /* @__PURE__ */ g.createElement(d, i(a({ ref: e }, o), { weights: l })));
n.displayName = "Lighthouse";
export {
  n as Lighthouse
};
