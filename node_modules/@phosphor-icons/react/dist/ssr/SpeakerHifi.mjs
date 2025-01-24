var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, t = (r, e) => {
  for (var a in e || (e = {}))
    S.call(e, a) && o(r, a, e[a]);
  if (i)
    for (var a of i(e))
      c.call(e, a) && o(r, a, e[a]);
  return r;
}, m = (r, e) => p(r, s(e));
import R, { forwardRef as d } from "react";
import k from "../lib/SSRBase.mjs";
import l from "../defs/SpeakerHifi.mjs";
const n = d((r, e) => /* @__PURE__ */ R.createElement(k, m(t({ ref: e }, r), { weights: l })));
n.displayName = "SpeakerHifi";
export {
  n as SpeakerHifi
};
