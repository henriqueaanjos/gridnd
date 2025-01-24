var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var t = (e, o, m) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[o] = m, a = (e, o) => {
  for (var m in o || (o = {}))
    n.call(o, m) && t(e, m, o[m]);
  if (r)
    for (var m of r(o))
      w.call(o, m) && t(e, m, o[m]);
  return e;
}, s = (e, o) => i(e, p(o));
import c, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import b from "../defs/ThumbsDown.mjs";
const d = h((e, o) => /* @__PURE__ */ c.createElement(R, s(a({ ref: o }, e), { weights: b })));
d.displayName = "ThumbsDown";
export {
  d as ThumbsDown
};
