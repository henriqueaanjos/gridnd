var p = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    s.call(e, a) && o(r, a, e[a]);
  if (t)
    for (var a of t(e))
      l.call(e, a) && o(r, a, e[a]);
  return r;
}, i = (r, e) => c(r, f(e));
import S, { forwardRef as R } from "react";
import b from "../lib/SSRBase.mjs";
import d from "../defs/DeviceTabletSpeaker.mjs";
const k = R((r, e) => /* @__PURE__ */ S.createElement(b, i(m({ ref: e }, r), { weights: d })));
k.displayName = "DeviceTabletSpeaker";
export {
  k as DeviceTabletSpeaker
};
