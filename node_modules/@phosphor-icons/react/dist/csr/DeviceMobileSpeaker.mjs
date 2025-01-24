var p = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var i = (o, e, r) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, t = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && i(o, r, e[r]);
  if (a)
    for (var r of a(e))
      l.call(e, r) && i(o, r, e[r]);
  return o;
}, m = (o, e) => c(o, f(e));
import n, { forwardRef as b } from "react";
import d from "../lib/IconBase.mjs";
import k from "../defs/DeviceMobileSpeaker.mjs";
const v = b((o, e) => /* @__PURE__ */ n.createElement(d, m(t({ ref: e }, o), { weights: k })));
v.displayName = "DeviceMobileSpeaker";
export {
  v as DeviceMobileSpeaker
};
