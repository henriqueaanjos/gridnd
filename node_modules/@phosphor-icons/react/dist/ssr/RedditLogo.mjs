var d = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var m = (e, o, t) => o in e ? d(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t, a = (e, o) => {
  for (var t in o || (o = {}))
    s.call(o, t) && m(e, t, o[t]);
  if (r)
    for (var t of r(o))
      R.call(o, t) && m(e, t, o[t]);
  return e;
}, i = (e, o) => f(e, p(o));
import c, { forwardRef as g } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/RedditLogo.mjs";
const w = g((e, o) => /* @__PURE__ */ c.createElement(l, i(a({ ref: o }, e), { weights: n })));
w.displayName = "RedditLogo";
export {
  w as RedditLogo
};
