var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (e, o, m) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[o] = m, a = (e, o) => {
  for (var m in o || (o = {}))
    p.call(o, m) && t(e, m, o[m]);
  if (r)
    for (var m of r(o))
      c.call(o, m) && t(e, m, o[m]);
  return e;
}, s = (e, o) => i(e, n(o));
import w, { forwardRef as h } from "react";
import b from "../lib/IconBase.mjs";
import d from "../defs/ThumbsDown.mjs";
const l = h((e, o) => /* @__PURE__ */ w.createElement(b, s(a({ ref: o }, e), { weights: d })));
l.displayName = "ThumbsDown";
export {
  l as ThumbsDown
};
