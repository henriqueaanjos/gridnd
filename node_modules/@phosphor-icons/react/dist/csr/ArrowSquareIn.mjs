var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (e, r, o) => r in e ? i(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    s.call(r, o) && t(e, o, r[o]);
  if (a)
    for (var o of a(r))
      c.call(r, o) && t(e, o, r[o]);
  return e;
}, f = (e, r) => n(e, p(r));
import w, { forwardRef as I } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/ArrowSquareIn.mjs";
const q = I((e, r) => /* @__PURE__ */ w.createElement(d, f(m({ ref: r }, e), { weights: l })));
q.displayName = "ArrowSquareIn";
export {
  q as ArrowSquareIn
};
