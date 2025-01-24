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
import l, { forwardRef as u } from "react";
import n from "../lib/IconBase.mjs";
import x from "../defs/ExcludeSquare.mjs";
const E = u((r, e) => /* @__PURE__ */ l.createElement(n, c(m({ ref: e }, r), { weights: x })));
E.displayName = "ExcludeSquare";
export {
  E as ExcludeSquare
};
