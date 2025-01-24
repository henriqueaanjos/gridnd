var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (t, o, e) => o in t ? f(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, m = (t, o) => {
  for (var e in o || (o = {}))
    c.call(o, e) && a(t, e, o[e]);
  if (r)
    for (var e of r(o))
      l.call(o, e) && a(t, e, o[e]);
  return t;
}, s = (t, o) => i(t, p(o));
import n, { forwardRef as E } from "react";
import N from "../lib/IconBase.mjs";
import d from "../defs/NotEquals.mjs";
const q = E((t, o) => /* @__PURE__ */ n.createElement(N, s(m({ ref: o }, t), { weights: d })));
q.displayName = "NotEquals";
export {
  q as NotEquals
};
