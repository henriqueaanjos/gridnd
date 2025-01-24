var s = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var o = (r, e, t) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && o(r, t, e[t]);
  if (a)
    for (var t of a(e))
      n.call(e, t) && o(r, t, e[t]);
  return r;
}, c = (r, e) => f(r, i(e));
import S, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/Screencast.mjs";
const w = R((r, e) => /* @__PURE__ */ S.createElement(d, c(m({ ref: e }, r), { weights: l })));
w.displayName = "Screencast";
export {
  w as Screencast
};
