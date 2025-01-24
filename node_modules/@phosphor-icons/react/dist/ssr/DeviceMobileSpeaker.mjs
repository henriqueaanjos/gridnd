var p = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var i = (r, e, o) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, t = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && i(r, o, e[o]);
  if (a)
    for (var o of a(e))
      l.call(e, o) && i(r, o, e[o]);
  return r;
}, m = (r, e) => c(r, f(e));
import S, { forwardRef as R } from "react";
import b from "../lib/SSRBase.mjs";
import d from "../defs/DeviceMobileSpeaker.mjs";
const k = R((r, e) => /* @__PURE__ */ S.createElement(b, m(t({ ref: e }, r), { weights: d })));
k.displayName = "DeviceMobileSpeaker";
export {
  k as DeviceMobileSpeaker
};
