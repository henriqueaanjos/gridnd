var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var R = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (t, e, r) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, m = (t, e) => {
  for (var r in e || (e = {}))
    R.call(e, r) && o(t, r, e[r]);
  if (a)
    for (var r of a(e))
      c.call(e, r) && o(t, r, e[r]);
  return t;
}, p = (t, e) => i(t, s(e));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/Repeat.mjs";
const S = l((t, e) => /* @__PURE__ */ d.createElement(n, p(m({ ref: e }, t), { weights: w })));
S.displayName = "Repeat";
export {
  S as Repeat
};
