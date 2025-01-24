var p = Object.defineProperty, s = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? p(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    f.call(o, r) && t(e, r, o[r]);
  if (a)
    for (var r of a(o))
      h.call(o, r) && t(e, r, o[r]);
  return e;
}, i = (e, o) => s(e, c(o));
import l, { forwardRef as n } from "react";
import S from "../lib/SSRBase.mjs";
import R from "../defs/MicrophoneSlash.mjs";
const d = n((e, o) => /* @__PURE__ */ l.createElement(S, i(m({ ref: o }, e), { weights: R })));
d.displayName = "MicrophoneSlash";
export {
  d as MicrophoneSlash
};
