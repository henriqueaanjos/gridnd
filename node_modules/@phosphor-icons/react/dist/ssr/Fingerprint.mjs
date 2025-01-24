var p = Object.defineProperty, n = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (e, r, t) => r in e ? p(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, m = (e, r) => {
  for (var t in r || (r = {}))
    s.call(r, t) && o(e, t, r[t]);
  if (i)
    for (var t of i(r))
      c.call(r, t) && o(e, t, r[t]);
  return e;
}, a = (e, r) => n(e, f(r));
import g, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/Fingerprint.mjs";
const w = R((e, r) => /* @__PURE__ */ g.createElement(d, a(m({ ref: r }, e), { weights: l })));
w.displayName = "Fingerprint";
export {
  w as Fingerprint
};
