var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (r, o, e) => o in r ? i(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, a = (r, o) => {
  for (var e in o || (o = {}))
    c.call(o, e) && t(r, e, o[e]);
  if (m)
    for (var e of m(o))
      l.call(o, e) && t(r, e, o[e]);
  return r;
}, f = (r, o) => p(r, s(o));
import g, { forwardRef as n } from "react";
import b from "../lib/IconBase.mjs";
import d from "../defs/TumblrLogo.mjs";
const u = n((r, o) => /* @__PURE__ */ g.createElement(b, f(a({ ref: o }, r), { weights: d })));
u.displayName = "TumblrLogo";
export {
  u as TumblrLogo
};
