var i = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (e, t, o) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, s = (e, t) => {
  for (var o in t || (t = {}))
    p.call(t, o) && a(e, o, t[o]);
  if (r)
    for (var o of r(t))
      c.call(t, o) && a(e, o, t[o]);
  return e;
}, m = (e, t) => l(e, f(t));
import S, { forwardRef as h } from "react";
import n from "../lib/IconBase.mjs";
import b from "../defs/SubtitlesSlash.mjs";
const d = h((e, t) => /* @__PURE__ */ S.createElement(n, m(s({ ref: t }, e), { weights: b })));
d.displayName = "SubtitlesSlash";
export {
  d as SubtitlesSlash
};
