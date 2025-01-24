var i = Object.defineProperty, s = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (r, e, t) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    f.call(e, t) && p(r, t, e[t]);
  if (o)
    for (var t of o(e))
      n.call(e, t) && p(r, t, e[t]);
  return r;
}, a = (r, e) => s(r, c(e));
import x, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import u from "../defs/TextSuperscript.mjs";
const w = d((r, e) => /* @__PURE__ */ x.createElement(l, a(m({ ref: e }, r), { weights: u })));
w.displayName = "TextSuperscript";
export {
  w as TextSuperscript
};
