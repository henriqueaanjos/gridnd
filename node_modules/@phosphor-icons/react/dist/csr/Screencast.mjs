var s = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var a = (r, e, t) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, c = (r, e) => {
  for (var t in e || (e = {}))
    n.call(e, t) && a(r, t, e[t]);
  if (o)
    for (var t of o(e))
      p.call(e, t) && a(r, t, e[t]);
  return r;
}, m = (r, e) => f(r, i(e));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Screencast.mjs";
const R = l((r, e) => /* @__PURE__ */ d.createElement(w, m(c({ ref: e }, r), { weights: I })));
R.displayName = "Screencast";
export {
  R as Screencast
};
