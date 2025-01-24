var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && t(r, o, e[o]);
  if (a)
    for (var o of a(e))
      n.call(e, o) && t(r, o, e[o]);
  return r;
}, p = (r, e) => i(r, s(e));
import d, { forwardRef as k } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/SpeakerX.mjs";
const I = k((r, e) => /* @__PURE__ */ d.createElement(l, p(m({ ref: e }, r), { weights: w })));
I.displayName = "SpeakerX";
export {
  I as SpeakerX
};
