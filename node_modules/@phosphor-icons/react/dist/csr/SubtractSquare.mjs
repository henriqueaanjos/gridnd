var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, u = Object.prototype.propertyIsEnumerable;
var o = (t, r, e) => r in t ? f(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, m = (t, r) => {
  for (var e in r || (r = {}))
    s.call(r, e) && o(t, e, r[e]);
  if (a)
    for (var e of a(r))
      u.call(r, e) && o(t, e, r[e]);
  return t;
}, c = (t, r) => i(t, p(r));
import S, { forwardRef as n } from "react";
import b from "../lib/IconBase.mjs";
import d from "../defs/SubtractSquare.mjs";
const l = n((t, r) => /* @__PURE__ */ S.createElement(b, c(m({ ref: r }, t), { weights: d })));
l.displayName = "SubtractSquare";
export {
  l as SubtractSquare
};
