var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var a = (e, r, o) => r in e ? i(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    c.call(r, o) && a(e, o, r[o]);
  if (t)
    for (var o of t(r))
      w.call(r, o) && a(e, o, r[o]);
  return e;
}, f = (e, r) => p(e, s(r));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import q from "../defs/ArrowSquareLeft.mjs";
const u = d((e, r) => /* @__PURE__ */ n.createElement(l, f(m({ ref: r }, e), { weights: q })));
u.displayName = "ArrowSquareLeft";
export {
  u as ArrowSquareLeft
};
