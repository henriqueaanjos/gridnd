var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var a = (r, e, t) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    c.call(e, t) && a(r, t, e[t]);
  if (o)
    for (var t of o(e))
      d.call(e, t) && a(r, t, e[t]);
  return r;
}, p = (r, e) => i(r, s(e));
import T, { forwardRef as h } from "react";
import n from "../lib/IconBase.mjs";
import x from "../defs/ChatTeardropText.mjs";
const l = h((r, e) => /* @__PURE__ */ T.createElement(n, p(m({ ref: e }, r), { weights: x })));
l.displayName = "ChatTeardropText";
export {
  l as ChatTeardropText
};
