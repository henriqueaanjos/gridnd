var f = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && t(o, r, e[r]);
  if (i)
    for (var r of i(e))
      c.call(e, r) && t(o, r, e[r]);
  return o;
}, a = (o, e) => n(o, p(e));
import d, { forwardRef as l } from "react";
import g from "../lib/IconBase.mjs";
import B from "../defs/Building.mjs";
const u = l((o, e) => /* @__PURE__ */ d.createElement(g, a(m({ ref: e }, o), { weights: B })));
u.displayName = "Building";
export {
  u as Building
};
