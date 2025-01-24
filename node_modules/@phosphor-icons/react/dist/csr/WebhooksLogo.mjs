var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    c.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      g.call(o, r) && m(e, r, o[r]);
  return e;
}, s = (e, o) => i(e, p(o));
import h, { forwardRef as n } from "react";
import b from "../lib/IconBase.mjs";
import d from "../defs/WebhooksLogo.mjs";
const k = n((e, o) => /* @__PURE__ */ h.createElement(b, s(a({ ref: o }, e), { weights: d })));
k.displayName = "WebhooksLogo";
export {
  k as WebhooksLogo
};
