var i = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (r, e, m) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, p = (r, e) => {
  for (var m in e || (e = {}))
    c.call(e, m) && a(r, m, e[m]);
  if (o)
    for (var m of o(e))
      l.call(e, m) && a(r, m, e[m]);
  return r;
}, t = (r, e) => f(r, s(e));
import S, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import k from "../defs/SpeakerSimpleX.mjs";
const w = n((r, e) => /* @__PURE__ */ S.createElement(d, t(p({ ref: e }, r), { weights: k })));
w.displayName = "SpeakerSimpleX";
export {
  w as SpeakerSimpleX
};
