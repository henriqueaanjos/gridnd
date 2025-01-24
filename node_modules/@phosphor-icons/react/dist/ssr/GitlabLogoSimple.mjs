var p = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var r = (e, o, t) => o in e ? p(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t, a = (e, o) => {
  for (var t in o || (o = {}))
    s.call(o, t) && r(e, t, o[t]);
  if (m)
    for (var t of m(o))
      S.call(o, t) && r(e, t, o[t]);
  return e;
}, i = (e, o) => l(e, f(o));
import c, { forwardRef as g } from "react";
import R from "../lib/SSRBase.mjs";
import b from "../defs/GitlabLogoSimple.mjs";
const d = g((e, o) => /* @__PURE__ */ c.createElement(R, i(a({ ref: o }, e), { weights: b })));
d.displayName = "GitlabLogoSimple";
export {
  d as GitlabLogoSimple
};
