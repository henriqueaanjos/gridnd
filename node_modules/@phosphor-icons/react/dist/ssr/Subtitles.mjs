var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var m = (e, t, r) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, a = (e, t) => {
  for (var r in t || (t = {}))
    l.call(t, r) && m(e, r, t[r]);
  if (o)
    for (var r of o(t))
      S.call(t, r) && m(e, r, t[r]);
  return e;
}, i = (e, t) => f(e, p(t));
import c, { forwardRef as R } from "react";
import b from "../lib/SSRBase.mjs";
import d from "../defs/Subtitles.mjs";
const n = R((e, t) => /* @__PURE__ */ c.createElement(b, i(a({ ref: t }, e), { weights: d })));
n.displayName = "Subtitles";
export {
  n as Subtitles
};
