var s = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var t = (m, e, o) => e in m ? s(m, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : m[e] = o, a = (m, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && t(m, o, e[o]);
  if (r)
    for (var o of r(e))
      h.call(e, o) && t(m, o, e[o]);
  return m;
}, p = (m, e) => f(m, i(e));
import n, { forwardRef as b } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/ThumbsUp.mjs";
const u = b((m, e) => /* @__PURE__ */ n.createElement(d, p(a({ ref: e }, m), { weights: l })));
u.displayName = "ThumbsUp";
export {
  u as ThumbsUp
};
