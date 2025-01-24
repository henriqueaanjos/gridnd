var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (o, r, e) => r in o ? f(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, a = (o, r) => {
  for (var e in r || (r = {}))
    d.call(r, e) && m(o, e, r[e]);
  if (t)
    for (var e of t(r))
      c.call(r, e) && m(o, e, r[e]);
  return o;
}, i = (o, r) => p(o, s(r));
import g, { forwardRef as B } from "react";
import R from "../lib/SSRBase.mjs";
import l from "../defs/BugDroid.mjs";
const n = B((o, r) => /* @__PURE__ */ g.createElement(R, i(a({ ref: r }, o), { weights: l })));
n.displayName = "BugDroid";
export {
  n as BugDroid
};
