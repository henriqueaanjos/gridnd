var i = Object.defineProperty, s = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, p = (r, e) => {
  for (var a in e || (e = {}))
    S.call(e, a) && o(r, a, e[a]);
  if (m)
    for (var a of m(e))
      f.call(e, a) && o(r, a, e[a]);
  return r;
}, t = (r, e) => s(r, l(e));
import c, { forwardRef as h } from "react";
import n from "../lib/IconBase.mjs";
import d from "../defs/SpeakerSimpleSlash.mjs";
const k = h((r, e) => /* @__PURE__ */ c.createElement(n, t(p({ ref: e }, r), { weights: d })));
k.displayName = "SpeakerSimpleSlash";
export {
  k as SpeakerSimpleSlash
};
