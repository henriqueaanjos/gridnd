var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (r, o, t) => o in r ? i(r, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[o] = t, a = (r, o) => {
  for (var t in o || (o = {}))
    l.call(o, t) && m(r, t, o[t]);
  if (e)
    for (var t of e(o))
      n.call(o, t) && m(r, t, o[t]);
  return r;
}, f = (r, o) => p(r, s(o));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import w from "../defs/Control.mjs";
const C = R((r, o) => /* @__PURE__ */ c.createElement(d, f(a({ ref: o }, r), { weights: w })));
C.displayName = "Control";
export {
  C as Control
};
