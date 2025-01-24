var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (r, o, t) => o in r ? f(r, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[o] = t, m = (r, o) => {
  for (var t in o || (o = {}))
    c.call(o, t) && i(r, t, o[t]);
  if (e)
    for (var t of e(o))
      n.call(o, t) && i(r, t, o[t]);
  return r;
}, a = (r, o) => p(r, s(o));
import w, { forwardRef as g } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/MicrosoftPowerpointLogo.mjs";
const l = g((r, o) => /* @__PURE__ */ w.createElement(R, a(m({ ref: o }, r), { weights: d })));
l.displayName = "MicrosoftPowerpointLogo";
export {
  l as MicrosoftPowerpointLogo
};
