var f = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (t, r, e) => r in t ? f(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, m = (t, r) => {
  for (var e in r || (r = {}))
    s.call(r, e) && a(t, e, r[e]);
  if (o)
    for (var e of o(r))
      c.call(r, e) && a(t, e, r[e]);
  return t;
}, i = (t, r) => n(t, p(r));
import w, { forwardRef as P } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/PawPrint.mjs";
const I = P((t, r) => /* @__PURE__ */ w.createElement(d, i(m({ ref: r }, t), { weights: l })));
I.displayName = "PawPrint";
export {
  I as PawPrint
};
