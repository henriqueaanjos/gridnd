var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var x = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var m = (t, e, r) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, a = (t, e) => {
  for (var r in e || (e = {}))
    x.call(e, r) && m(t, r, e[r]);
  if (o)
    for (var r of o(e))
      S.call(e, r) && m(t, r, e[r]);
  return t;
}, i = (t, e) => p(t, s(e));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/TextHSix.mjs";
const n = R((t, e) => /* @__PURE__ */ c.createElement(d, i(a({ ref: e }, t), { weights: l })));
n.displayName = "TextHSix";
export {
  n as TextHSix
};
