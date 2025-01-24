var S = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? S(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, p = (r, e) => {
  for (var a in e || (e = {}))
    l.call(e, a) && o(r, a, e[a]);
  if (m)
    for (var a of m(e))
      f.call(e, a) && o(r, a, e[a]);
  return r;
}, t = (r, e) => i(r, s(e));
import c, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/SpeakerSimpleSlash.mjs";
const k = h((r, e) => /* @__PURE__ */ c.createElement(R, t(p({ ref: e }, r), { weights: d })));
k.displayName = "SpeakerSimpleSlash";
export {
  k as SpeakerSimpleSlash
};
