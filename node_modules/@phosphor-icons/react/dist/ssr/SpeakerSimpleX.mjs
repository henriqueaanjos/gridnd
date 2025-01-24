var i = Object.defineProperty, S = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (r, e, m) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, p = (r, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && o(r, m, e[m]);
  if (a)
    for (var m of a(e))
      l.call(e, m) && o(r, m, e[m]);
  return r;
}, t = (r, e) => S(r, f(e));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import k from "../defs/SpeakerSimpleX.mjs";
const n = R((r, e) => /* @__PURE__ */ c.createElement(d, t(p({ ref: e }, r), { weights: k })));
n.displayName = "SpeakerSimpleX";
export {
  n as SpeakerSimpleX
};
