var p = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (o, e, r) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && a(o, r, e[r]);
  if (t)
    for (var r of t(e))
      n.call(e, r) && a(o, r, e[r]);
  return o;
}, i = (o, e) => c(o, f(e));
import S, { forwardRef as g } from "react";
import h from "../lib/SSRBase.mjs";
import R from "../defs/MicrophoneStage.mjs";
const d = g((o, e) => /* @__PURE__ */ S.createElement(h, i(m({ ref: e }, o), { weights: R })));
d.displayName = "MicrophoneStage";
export {
  d as MicrophoneStage
};
