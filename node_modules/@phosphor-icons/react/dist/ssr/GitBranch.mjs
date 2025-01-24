var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var o = (t, r, e) => r in t ? c(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, m = (t, r) => {
  for (var e in r || (r = {}))
    s.call(r, e) && o(t, e, r[e]);
  if (a)
    for (var e of a(r))
      n.call(r, e) && o(t, e, r[e]);
  return t;
}, i = (t, r) => f(t, p(r));
import h, { forwardRef as B } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/GitBranch.mjs";
const l = B((t, r) => /* @__PURE__ */ h.createElement(R, i(m({ ref: r }, t), { weights: d })));
l.displayName = "GitBranch";
export {
  l as GitBranch
};
