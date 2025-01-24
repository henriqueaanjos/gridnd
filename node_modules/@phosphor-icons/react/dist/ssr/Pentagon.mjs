var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (o, e, t) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, m = (o, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && a(o, t, e[t]);
  if (r)
    for (var t of r(e))
      c.call(e, t) && a(o, t, e[t]);
  return o;
}, n = (o, e) => i(o, p(e));
import g, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/Pentagon.mjs";
const w = R((o, e) => /* @__PURE__ */ g.createElement(d, n(m({ ref: e }, o), { weights: l })));
w.displayName = "Pentagon";
export {
  w as Pentagon
};
