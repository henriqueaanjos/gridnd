var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (r, o, e) => o in r ? i(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, m = (r, o) => {
  for (var e in o || (o = {}))
    d.call(o, e) && t(r, e, o[e]);
  if (a)
    for (var e of a(o))
      n.call(o, e) && t(r, e, o[e]);
  return r;
}, f = (r, o) => p(r, s(o));
import c, { forwardRef as R } from "react";
import l from "../lib/SSRBase.mjs";
import w from "../defs/Tornado.mjs";
const S = R((r, o) => /* @__PURE__ */ c.createElement(l, f(m({ ref: o }, r), { weights: w })));
S.displayName = "Tornado";
export {
  S as Tornado
};
