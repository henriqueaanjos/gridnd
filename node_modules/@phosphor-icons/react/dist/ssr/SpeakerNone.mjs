var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    n.call(e, o) && t(r, o, e[o]);
  if (a)
    for (var o of a(e))
      S.call(e, o) && t(r, o, e[o]);
  return r;
}, p = (r, e) => i(r, s(e));
import c, { forwardRef as N } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/SpeakerNone.mjs";
const k = N((r, e) => /* @__PURE__ */ c.createElement(R, p(m({ ref: e }, r), { weights: d })));
k.displayName = "SpeakerNone";
export {
  k as SpeakerNone
};
