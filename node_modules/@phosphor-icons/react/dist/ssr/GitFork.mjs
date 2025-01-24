var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var m = (o, r, t) => r in o ? f(o, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[r] = t, a = (o, r) => {
  for (var t in r || (r = {}))
    c.call(r, t) && m(o, t, r[t]);
  if (e)
    for (var t of e(r))
      R.call(r, t) && m(o, t, r[t]);
  return o;
}, i = (o, r) => p(o, s(r));
import d, { forwardRef as k } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/GitFork.mjs";
const w = k((o, r) => /* @__PURE__ */ d.createElement(l, i(a({ ref: r }, o), { weights: n })));
w.displayName = "GitFork";
export {
  w as GitFork
};
