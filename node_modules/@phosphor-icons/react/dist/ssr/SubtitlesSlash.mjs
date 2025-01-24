var i = Object.defineProperty, l = Object.defineProperties;
var S = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, t, r) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, s = (e, t) => {
  for (var r in t || (t = {}))
    f.call(t, r) && o(e, r, t[r]);
  if (a)
    for (var r of a(t))
      p.call(t, r) && o(e, r, t[r]);
  return e;
}, m = (e, t) => l(e, S(t));
import c, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import b from "../defs/SubtitlesSlash.mjs";
const d = h((e, t) => /* @__PURE__ */ c.createElement(R, m(s({ ref: t }, e), { weights: b })));
d.displayName = "SubtitlesSlash";
export {
  d as SubtitlesSlash
};
