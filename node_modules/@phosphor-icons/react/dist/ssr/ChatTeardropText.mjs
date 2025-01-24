var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, T = Object.prototype.propertyIsEnumerable;
var o = (r, e, t) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    d.call(e, t) && o(r, t, e[t]);
  if (a)
    for (var t of a(e))
      T.call(e, t) && o(r, t, e[t]);
  return r;
}, p = (r, e) => i(r, s(e));
import c, { forwardRef as h } from "react";
import x from "../lib/SSRBase.mjs";
import R from "../defs/ChatTeardropText.mjs";
const l = h((r, e) => /* @__PURE__ */ c.createElement(x, p(m({ ref: e }, r), { weights: R })));
l.displayName = "ChatTeardropText";
export {
  l as ChatTeardropText
};
