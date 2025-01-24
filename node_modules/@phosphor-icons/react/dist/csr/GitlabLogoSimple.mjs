var p = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var r = (e, o, t) => o in e ? p(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t, a = (e, o) => {
  for (var t in o || (o = {}))
    s.call(o, t) && r(e, t, o[t]);
  if (m)
    for (var t of m(o))
      c.call(o, t) && r(e, t, o[t]);
  return e;
}, i = (e, o) => l(e, f(o));
import g, { forwardRef as n } from "react";
import b from "../lib/IconBase.mjs";
import d from "../defs/GitlabLogoSimple.mjs";
const w = n((e, o) => /* @__PURE__ */ g.createElement(b, i(a({ ref: o }, e), { weights: d })));
w.displayName = "GitlabLogoSimple";
export {
  w as GitlabLogoSimple
};
