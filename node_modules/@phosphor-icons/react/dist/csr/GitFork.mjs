var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (r, o, t) => o in r ? f(r, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[o] = t, a = (r, o) => {
  for (var t in o || (o = {}))
    c.call(o, t) && m(r, t, o[t]);
  if (e)
    for (var t of e(o))
      n.call(o, t) && m(r, t, o[t]);
  return r;
}, i = (r, o) => p(r, s(o));
import d, { forwardRef as k } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/GitFork.mjs";
const F = k((r, o) => /* @__PURE__ */ d.createElement(l, i(a({ ref: o }, r), { weights: w })));
F.displayName = "GitFork";
export {
  F as GitFork
};
