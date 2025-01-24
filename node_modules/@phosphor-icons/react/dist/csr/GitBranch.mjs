var c = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (t, r, e) => r in t ? c(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, m = (t, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && a(t, e, r[e]);
  if (o)
    for (var e of o(r))
      s.call(r, e) && a(t, e, r[e]);
  return t;
}, i = (t, r) => f(t, n(r));
import h, { forwardRef as B } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/GitBranch.mjs";
const w = B((t, r) => /* @__PURE__ */ h.createElement(d, i(m({ ref: r }, t), { weights: l })));
w.displayName = "GitBranch";
export {
  w as GitBranch
};
