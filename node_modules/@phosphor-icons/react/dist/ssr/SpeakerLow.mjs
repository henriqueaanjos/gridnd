var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var w = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    w.call(e, o) && t(r, o, e[o]);
  if (a)
    for (var o of a(e))
      S.call(e, o) && t(r, o, e[o]);
  return r;
}, p = (r, e) => i(r, s(e));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import k from "../defs/SpeakerLow.mjs";
const l = R((r, e) => /* @__PURE__ */ c.createElement(d, p(m({ ref: e }, r), { weights: k })));
l.displayName = "SpeakerLow";
export {
  l as SpeakerLow
};
