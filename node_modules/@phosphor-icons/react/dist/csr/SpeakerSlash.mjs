var s = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    c.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      l.call(e, a) && t(r, a, e[a]);
  return r;
}, p = (r, e) => f(r, i(e));
import S, { forwardRef as h } from "react";
import n from "../lib/IconBase.mjs";
import d from "../defs/SpeakerSlash.mjs";
const k = h((r, e) => /* @__PURE__ */ S.createElement(n, p(m({ ref: e }, r), { weights: d })));
k.displayName = "SpeakerSlash";
export {
  k as SpeakerSlash
};
