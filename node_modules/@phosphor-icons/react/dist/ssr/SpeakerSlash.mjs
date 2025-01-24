var s = Object.defineProperty, S = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    i.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      l.call(e, a) && t(r, a, e[a]);
  return r;
}, p = (r, e) => S(r, f(e));
import c, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/SpeakerSlash.mjs";
const k = h((r, e) => /* @__PURE__ */ c.createElement(R, p(m({ ref: e }, r), { weights: d })));
k.displayName = "SpeakerSlash";
export {
  k as SpeakerSlash
};
