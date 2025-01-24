var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var a = (r, e, o) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && a(r, o, e[o]);
  if (t)
    for (var o of t(e))
      R.call(e, o) && a(r, o, e[o]);
  return r;
}, s = (r, e) => f(r, i(e));
import d, { forwardRef as n } from "react";
import B from "../lib/SSRBase.mjs";
import k from "../defs/BracketsRound.mjs";
const l = n((r, e) => /* @__PURE__ */ d.createElement(B, s(m({ ref: e }, r), { weights: k })));
l.displayName = "BracketsRound";
export {
  l as BracketsRound
};
