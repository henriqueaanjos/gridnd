var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && t(r, o, e[o]);
  if (a)
    for (var o of a(e))
      d.call(e, o) && t(r, o, e[o]);
  return r;
}, c = (r, e) => i(r, p(e));
import l, { forwardRef as g } from "react";
import h from "../lib/IconBase.mjs";
import n from "../defs/FlagCheckered.mjs";
const k = g((r, e) => /* @__PURE__ */ l.createElement(h, c(m({ ref: e }, r), { weights: n })));
k.displayName = "FlagCheckered";
export {
  k as FlagCheckered
};
