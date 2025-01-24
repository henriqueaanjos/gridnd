var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, u = Object.prototype.propertyIsEnumerable;
var a = (e, r, o) => r in e ? i(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    c.call(r, o) && a(e, o, r[o]);
  if (t)
    for (var o of t(r))
      u.call(r, o) && a(e, o, r[o]);
  return e;
}, f = (e, r) => p(e, s(r));
import w, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/ArrowSquareOut.mjs";
const q = n((e, r) => /* @__PURE__ */ w.createElement(d, f(m({ ref: r }, e), { weights: l })));
q.displayName = "ArrowSquareOut";
export {
  q as ArrowSquareOut
};
