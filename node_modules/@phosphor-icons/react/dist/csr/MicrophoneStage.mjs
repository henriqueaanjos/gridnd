var p = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (o, e, r) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    n.call(e, r) && a(o, r, e[r]);
  if (t)
    for (var r of t(e))
      s.call(e, r) && a(o, r, e[r]);
  return o;
}, i = (o, e) => c(o, f(e));
import g, { forwardRef as h } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/MicrophoneStage.mjs";
const w = h((o, e) => /* @__PURE__ */ g.createElement(d, i(m({ ref: e }, o), { weights: l })));
w.displayName = "MicrophoneStage";
export {
  w as MicrophoneStage
};
