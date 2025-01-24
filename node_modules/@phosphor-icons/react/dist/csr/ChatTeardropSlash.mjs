var s = Object.defineProperty, f = Object.defineProperties;
var h = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (a, r, e) => r in a ? s(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, m = (a, r) => {
  for (var e in r || (r = {}))
    i.call(r, e) && t(a, e, r[e]);
  if (o)
    for (var e of o(r))
      c.call(r, e) && t(a, e, r[e]);
  return a;
}, p = (a, r) => f(a, h(r));
import d, { forwardRef as l } from "react";
import n from "../lib/IconBase.mjs";
import w from "../defs/ChatTeardropSlash.mjs";
const C = l((a, r) => /* @__PURE__ */ d.createElement(n, p(m({ ref: r }, a), { weights: w })));
C.displayName = "ChatTeardropSlash";
export {
  C as ChatTeardropSlash
};
