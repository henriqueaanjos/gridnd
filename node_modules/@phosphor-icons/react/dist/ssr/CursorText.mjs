var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, x = Object.prototype.propertyIsEnumerable;
var m = (e, r, o) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, a = (e, r) => {
  for (var o in r || (r = {}))
    c.call(r, o) && m(e, o, r[o]);
  if (t)
    for (var o of t(r))
      x.call(r, o) && m(e, o, r[o]);
  return e;
}, s = (e, r) => i(e, p(r));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/CursorText.mjs";
const u = d((e, r) => /* @__PURE__ */ R.createElement(l, s(a({ ref: r }, e), { weights: n })));
u.displayName = "CursorText";
export {
  u as CursorText
};
