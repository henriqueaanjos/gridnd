var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var a = (r, o, t) => o in r ? f(r, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[o] = t, m = (r, o) => {
  for (var t in o || (o = {}))
    c.call(o, t) && a(r, t, o[t]);
  if (e)
    for (var t of e(o))
      g.call(o, t) && a(r, t, o[t]);
  return r;
}, i = (r, o) => p(r, s(o));
import x, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/MatrixLogo.mjs";
const n = R((r, o) => /* @__PURE__ */ x.createElement(d, i(m({ ref: o }, r), { weights: l })));
n.displayName = "MatrixLogo";
export {
  n as MatrixLogo
};
