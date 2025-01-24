var s = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var m = (t, e, r) => e in t ? s(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, a = (t, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && m(t, r, e[r]);
  if (o)
    for (var r of o(e))
      R.call(e, r) && m(t, r, e[r]);
  return t;
}, i = (t, e) => l(t, f(e));
import u, { forwardRef as c } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/GitPullRequest.mjs";
const q = c((t, e) => /* @__PURE__ */ u.createElement(d, i(a({ ref: e }, t), { weights: n })));
q.displayName = "GitPullRequest";
export {
  q as GitPullRequest
};
