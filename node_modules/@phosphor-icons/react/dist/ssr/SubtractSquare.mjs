var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var o = (t, r, e) => r in t ? c(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, m = (t, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && o(t, e, r[e]);
  if (a)
    for (var e of a(r))
      s.call(r, e) && o(t, e, r[e]);
  return t;
}, S = (t, r) => f(t, i(r));
import u, { forwardRef as R } from "react";
import b from "../lib/SSRBase.mjs";
import d from "../defs/SubtractSquare.mjs";
const l = R((t, r) => /* @__PURE__ */ u.createElement(b, S(m({ ref: r }, t), { weights: d })));
l.displayName = "SubtractSquare";
export {
  l as SubtractSquare
};
