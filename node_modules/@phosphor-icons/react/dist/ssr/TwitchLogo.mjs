var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var m = (t, o, e) => o in t ? c(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, a = (t, o) => {
  for (var e in o || (o = {}))
    s.call(o, e) && m(t, e, o[e]);
  if (r)
    for (var e of r(o))
      w.call(o, e) && m(t, e, o[e]);
  return t;
}, i = (t, o) => f(t, p(o));
import g, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/TwitchLogo.mjs";
const l = h((t, o) => /* @__PURE__ */ g.createElement(R, i(a({ ref: o }, t), { weights: d })));
l.displayName = "TwitchLogo";
export {
  l as TwitchLogo
};
