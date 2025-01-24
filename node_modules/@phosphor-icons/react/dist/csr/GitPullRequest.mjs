var s = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (t, e, o) => e in t ? s(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, a = (t, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && m(t, o, e[o]);
  if (r)
    for (var o of r(e))
      c.call(e, o) && m(t, o, e[o]);
  return t;
}, i = (t, e) => l(t, f(e));
import u, { forwardRef as R } from "react";
import n from "../lib/IconBase.mjs";
import d from "../defs/GitPullRequest.mjs";
const q = R((t, e) => /* @__PURE__ */ u.createElement(n, i(a({ ref: e }, t), { weights: d })));
q.displayName = "GitPullRequest";
export {
  q as GitPullRequest
};
