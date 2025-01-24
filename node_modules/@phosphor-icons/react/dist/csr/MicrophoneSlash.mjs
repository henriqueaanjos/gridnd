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
import n, { forwardRef as l } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/MicrophoneSlash.mjs";
const I = l((e, o) => /* @__PURE__ */ n.createElement(d, i(m({ ref: o }, e), { weights: w })));
I.displayName = "MicrophoneSlash";
export {
  I as MicrophoneSlash
};
