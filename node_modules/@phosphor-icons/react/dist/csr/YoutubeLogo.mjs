var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, u = Object.prototype.propertyIsEnumerable;
var m = (e, o, t) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t, a = (e, o) => {
  for (var t in o || (o = {}))
    c.call(o, t) && m(e, t, o[t]);
  if (r)
    for (var t of r(o))
      u.call(o, t) && m(e, t, o[t]);
  return e;
}, f = (e, o) => p(e, s(o));
import g, { forwardRef as n } from "react";
import b from "../lib/IconBase.mjs";
import d from "../defs/YoutubeLogo.mjs";
const l = n((e, o) => /* @__PURE__ */ g.createElement(b, f(a({ ref: o }, e), { weights: d })));
l.displayName = "YoutubeLogo";
export {
  l as YoutubeLogo
};
