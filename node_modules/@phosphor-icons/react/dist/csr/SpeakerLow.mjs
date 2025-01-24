var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      w.call(e, r) && t(o, r, e[r]);
  return o;
}, p = (o, e) => i(o, s(e));
import n, { forwardRef as d } from "react";
import k from "../lib/IconBase.mjs";
import l from "../defs/SpeakerLow.mjs";
const I = d((o, e) => /* @__PURE__ */ n.createElement(k, p(m({ ref: e }, o), { weights: l })));
I.displayName = "SpeakerLow";
export {
  I as SpeakerLow
};
