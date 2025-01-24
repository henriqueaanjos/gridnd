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
import n, { forwardRef as b } from "react";
import d from "../lib/IconBase.mjs";
import k from "../defs/DeviceTabletSpeaker.mjs";
const v = b((r, e) => /* @__PURE__ */ n.createElement(d, i(m({ ref: e }, r), { weights: k })));
v.displayName = "DeviceTabletSpeaker";
export {
  v as DeviceTabletSpeaker
};
