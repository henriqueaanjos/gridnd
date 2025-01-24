var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var m = (t, o, e) => o in t ? f(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, a = (t, o) => {
  for (var e in o || (o = {}))
    c.call(o, e) && m(t, e, o[e]);
  if (r)
    for (var e of r(o))
      g.call(o, e) && m(t, e, o[e]);
  return t;
}, i = (t, o) => p(t, s(o));
import h, { forwardRef as R } from "react";
import b from "../lib/SSRBase.mjs";
import d from "../defs/GithubLogo.mjs";
const l = R((t, o) => /* @__PURE__ */ h.createElement(b, i(a({ ref: o }, t), { weights: d })));
l.displayName = "GithubLogo";
export {
  l as GithubLogo
};
