var p = Object.defineProperty, s = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var m = (e, t, r) => t in e ? p(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, a = (e, t) => {
  for (var r in t || (t = {}))
    f.call(t, r) && m(e, r, t[r]);
  if (o)
    for (var r of o(t))
      S.call(t, r) && m(e, r, t[r]);
  return e;
}, i = (e, t) => s(e, c(t));
import x, { forwardRef as R } from "react";
import b from "../lib/SSRBase.mjs";
import d from "../defs/TextSubscript.mjs";
const l = R((e, t) => /* @__PURE__ */ x.createElement(b, i(a({ ref: t }, e), { weights: d })));
l.displayName = "TextSubscript";
export {
  l as TextSubscript
};
