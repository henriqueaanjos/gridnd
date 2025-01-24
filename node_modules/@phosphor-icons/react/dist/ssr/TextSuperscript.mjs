var i = Object.defineProperty, s = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var p = (r, e, t) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    f.call(e, t) && p(r, t, e[t]);
  if (o)
    for (var t of o(e))
      S.call(e, t) && p(r, t, e[t]);
  return r;
}, a = (r, e) => s(r, c(e));
import x, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/TextSuperscript.mjs";
const n = R((r, e) => /* @__PURE__ */ x.createElement(d, a(m({ ref: e }, r), { weights: l })));
n.displayName = "TextSuperscript";
export {
  n as TextSuperscript
};
