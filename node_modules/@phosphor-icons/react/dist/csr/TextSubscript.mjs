var p = Object.defineProperty, s = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (e, t, r) => t in e ? p(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, a = (e, t) => {
  for (var r in t || (t = {}))
    f.call(t, r) && m(e, r, t[r]);
  if (o)
    for (var r of o(t))
      n.call(t, r) && m(e, r, t[r]);
  return e;
}, i = (e, t) => s(e, c(t));
import x, { forwardRef as b } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/TextSubscript.mjs";
const u = b((e, t) => /* @__PURE__ */ x.createElement(d, i(a({ ref: t }, e), { weights: l })));
u.displayName = "TextSubscript";
export {
  u as TextSubscript
};
