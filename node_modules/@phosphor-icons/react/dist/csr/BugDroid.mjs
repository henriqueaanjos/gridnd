var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (r, o, e) => o in r ? f(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, a = (r, o) => {
  for (var e in o || (o = {}))
    c.call(o, e) && m(r, e, o[e]);
  if (t)
    for (var e of t(o))
      d.call(o, e) && m(r, e, o[e]);
  return r;
}, i = (r, o) => p(r, s(o));
import g, { forwardRef as n } from "react";
import B from "../lib/IconBase.mjs";
import l from "../defs/BugDroid.mjs";
const u = n((r, o) => /* @__PURE__ */ g.createElement(B, i(a({ ref: o }, r), { weights: l })));
u.displayName = "BugDroid";
export {
  u as BugDroid
};
