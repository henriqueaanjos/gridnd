var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (o, r, t) => r in o ? i(o, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[r] = t, m = (o, r) => {
  for (var t in r || (r = {}))
    c.call(r, t) && a(o, t, r[t]);
  if (e)
    for (var t of e(r))
      n.call(r, t) && a(o, t, r[t]);
  return o;
}, f = (o, r) => p(o, s(r));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import C from "../defs/Carrot.mjs";
const I = l((o, r) => /* @__PURE__ */ d.createElement(w, f(m({ ref: r }, o), { weights: C })));
I.displayName = "Carrot";
export {
  I as Carrot
};
