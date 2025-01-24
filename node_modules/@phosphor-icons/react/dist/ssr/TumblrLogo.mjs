var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (r, o, e) => o in r ? i(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, a = (r, o) => {
  for (var e in o || (o = {}))
    l.call(o, e) && t(r, e, o[e]);
  if (m)
    for (var e of m(o))
      c.call(o, e) && t(r, e, o[e]);
  return r;
}, f = (r, o) => p(r, s(o));
import g, { forwardRef as R } from "react";
import b from "../lib/SSRBase.mjs";
import d from "../defs/TumblrLogo.mjs";
const n = R((r, o) => /* @__PURE__ */ g.createElement(b, f(a({ ref: o }, r), { weights: d })));
n.displayName = "TumblrLogo";
export {
  n as TumblrLogo
};
