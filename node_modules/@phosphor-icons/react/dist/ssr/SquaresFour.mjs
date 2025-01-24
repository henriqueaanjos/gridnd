var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var u = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var t = (e, r, o) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    u.call(r, o) && t(e, o, r[o]);
  if (a)
    for (var o of a(r))
      S.call(r, o) && t(e, o, r[o]);
  return e;
}, s = (e, r) => i(e, p(r));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/SquaresFour.mjs";
const n = R((e, r) => /* @__PURE__ */ c.createElement(d, s(m({ ref: r }, e), { weights: l })));
n.displayName = "SquaresFour";
export {
  n as SquaresFour
};
