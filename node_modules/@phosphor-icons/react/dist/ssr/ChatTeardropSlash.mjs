var s = Object.defineProperty, f = Object.defineProperties;
var h = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (a, r, e) => r in a ? s(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, m = (a, r) => {
  for (var e in r || (r = {}))
    i.call(r, e) && t(a, e, r[e]);
  if (o)
    for (var e of o(r))
      d.call(r, e) && t(a, e, r[e]);
  return a;
}, p = (a, r) => f(a, h(r));
import l, { forwardRef as S } from "react";
import c from "../lib/SSRBase.mjs";
import R from "../defs/ChatTeardropSlash.mjs";
const n = S((a, r) => /* @__PURE__ */ l.createElement(c, p(m({ ref: r }, a), { weights: R })));
n.displayName = "ChatTeardropSlash";
export {
  n as ChatTeardropSlash
};
