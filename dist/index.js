const e = /^[GCDZTSPKXLY1-9]\d{1,4}$/, a = /^\d{15,17}$/, d = /^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/, u = /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/, t = /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/, A = /^(([0-9A-Za-z]{15})|([0-9A-Za-z]{18})|([0-9A-Za-z]{20}))$/, o = /^thunderx?:\/\/[a-zA-Z\d]+=$/, F = /^ed2k:\/\/\|file\|.+\|\/$/, n = /^magnet:\?xt=urn:btih:[0-9a-fA-F]{40,}.*$/, s = /^(254|252|248|240|224|192|128)\.0\.0\.0|255\.(254|252|248|240|224|192|128|0)\.0\.0|255\.255\.(254|252|248|240|224|192|128|0)\.0|255\.255\.255\.(255|254|252|248|240|224|192|128|0)$/, c = /^\/(?:[^/]+\/)*\.[^/]*/, g = /^\/(?:[^/]+\/)*$/, E = /^\/(?:[^/]+\/)*[^/]+$/, f = /^[a-zA-Z]:\\(?:\w+\\?)*$/, p = /^[a-zA-Z]:\\(?:\w+\\)*\w+\.\w+$/, x = /^(s[hz]|S[HZ])(000[\d]{3}|002[\d]{3}|300[\d]{3}|600[\d]{3}|60[\d]{4})$/, $ = /^150$|^(?:\d|[1-9]\d|1[0-4]\d)(?:\.5)?$/, D = /<!--[\s\S]*?-->/g, R = /^[a-fA-F0-9]{32}$/, i = /^[a-f\d]{4}(?:[a-f\d]{4}-){4}[a-f\d]{12}$/i, r = /^\d+(?:\.\d+){2}$/, b = /^https?:\/\/(.+\/)+.+(\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i, Z = /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i, z = /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/, N = /^(?:1[0-2]|0?[1-9]):[0-5]\d:[0-5]\d$/, P = /^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*?)\s*$/i, C = /^-?\d{1,3}(,\d{3})*(\.\d{1,2})?$/, m = /^[1-9]\d{9,29}$/, l = /^(?:[\u4e00-\u9fa5·]{2,16})$/, h = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/, S = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z](?:((\d{5}[A-HJK])|([A-HJK][A-HJ-NP-Z0-9][0-9]{4}))|[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳])$/, w = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]$/, H = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]$/, I = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/, J = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/, M = /^(?:(?:\+|00)86)?1\d{10}$/, v = /^\d{1,4}(-)(1[0-2]|0?[1-9])\1(0?[1-9]|[1-2]\d|30|31)$/, L = /^(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)$/, T = /^浙江|上海|北京|天津|重庆|黑龙江|吉林|辽宁|内蒙古|河北|新疆|甘肃|青海|陕西|宁夏|河南|山东|山西|安徽|湖北|湖南|江苏|四川|贵州|云南|广西|西藏|江西|广东|福建|台湾|海南|香港|澳门$/, W = /^\d{4}([/:-\S])(1[0-2]|0?[1-9])\1(0?[1-9]|[1-2]\d|30|31) (?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/, _ = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, k = /^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$/, B = /^[1-9]\d{7}(?:0\d|10|11|12)(?:0[1-9]|[1-2][\d]|30|31)\d{3}$/, U = /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/, X = /^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/, K = /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/, Q = /^[a-zA-Z]\w{4,15}$/, V = /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/, j = /^[+-]?(\d+([.]\d*)?([eE][+-]?\d+)?|[.]\d+([eE][+-]?\d+)?)$/, G = /^\d+$/, Y = /<(\w+)[^>]*>(.*?<\/\1>)?/, y = /[\u4e00-\u9fa5|\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]/, O = /^[1-9][0-9]{4,10}$/, q = /^[A-Za-z0-9]+$/, e0 = /^[a-zA-Z]+$/, a0 = /^[a-z]+$/, d0 = /^[A-Z]+$/, u0 = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/, t0 = /^[\w-]{4,16}$/, A0 = /^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])(?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$/, o0 = /(^(?:(?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$)|(^\[(?:(?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))\](?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$)/i, F0 = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3}|[a-fA-F0-9]{8}|[a-fA-F0-9]{4})$/, n0 = /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/, s0 = /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/, c0 = /^((?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])|(\d))+$/, g0 = /^[^A-Za-z]*$/, E0 = /^([a-zA-Z_]\w*)+([.][a-zA-Z_]\w*)+$/, f0 = /^(([a-f0-9][0,2,4,6,8,a,c,e]:([a-f0-9]{2}:){4})|([a-f0-9][0,2,4,6,8,a,c,e]-([a-f0-9]{2}-){4}))[a-f0-9]{2}$/i, p0 = /(.)\1+/, x0 = /^(?=.*[a-zA-Z])(?=.*\d).+$/, $0 = /^[a-zA-Z]\d{6}\([\dA]\)$/, D0 = /^[1|5|7]\d{6}\(\d\)$/, R0 = /^[a-zA-Z][0-9]{9}$/, i0 = /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=]+$)(?![0-9\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=]/, r0 = /[\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E]+/, b0 = /^\+?[1-9]\d*$/, Z0 = /^-[1-9]\d*$/, z0 = /^(?:0|(?:-?[1-9]\d*))$/, N0 = /^(-?[1-9]\d*\.\d+|-?0\.\d*[1-9]\d*|0\.0+)$/, P0 = /^(-?[1-9]\d*\.\d+|-?0\.\d*[1-9])$/, C0 = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, m0 = /^([0-9a-zA-Z-]{1,}\.)+([a-zA-Z]{2,})$/, l0 = /^[\u4E00-\u9FA5](字第)([0-9a-zA-Z]{4,8})(号?)$/, h0 = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
export {
  r0 as RegASCII,
  h0 as RegAccountBook,
  m0 as RegDomainName,
  N as RegExp12Time,
  B as RegExp1IdNumber,
  z as RegExp24Time,
  U as RegExp2IdNumber,
  D0 as RegExpAMIDCard,
  Q as RegExpAccount,
  H as RegExpAllNumberPlate,
  q as RegExpAlphanumeric,
  C as RegExpAmount,
  P as RegExpBase64,
  V as RegExpCN,
  l as RegExpCNName,
  y as RegExpCNPunctuation,
  d0 as RegExpCapital,
  m as RegExpCardNumber,
  x0 as RegExpCharacter,
  c0 as RegExpChineseAndNumbers,
  F0 as RegExpColor16,
  p0 as RegExpContinuousCharacters,
  W as RegExpDate,
  j as RegExpDecimals,
  h as RegExpENName,
  F as RegExpEd2k,
  _ as RegExpEmail,
  C0 as RegExpEmailLoose,
  e0 as RegExpEnglishAlphabet,
  N0 as RegExpFloatingNumber,
  P0 as RegExpFloatingNumberStrict,
  $ as RegExpGrade,
  $0 as RegExpHKIDCard,
  D as RegExpHTMLAnnotation,
  Y as RegExpHTMLDOM,
  a as RegExpIMEI,
  d as RegExpIP,
  A0 as RegExpIPV4,
  o0 as RegExpIPV6,
  X as RegExpIdNumber,
  Z as RegExpImageUrlPath,
  z0 as RegExpInteger,
  E0 as RegExpJavaPackageName,
  g as RegExpLinuxDirPath,
  E as RegExpLinuxFilePath,
  c as RegExpLinuxHiddenDirPath,
  a0 as RegExpLowercase,
  R as RegExpMD5,
  f0 as RegExpMac,
  n as RegExpMagnet,
  M as RegExpMobilePhoneLoose,
  I as RegExpMobilePhoneNumberStrict,
  J as RegExpMobilePhoneNunber,
  Z0 as RegExpNegativeInteger,
  S as RegExpNewEnergyNumberPlate,
  g0 as RegExpNotLetter,
  G as RegExpNumber,
  w as RegExpNumberPlate,
  K as RegExpPassport,
  u0 as RegExpPasswordStrength,
  b0 as RegExpPositiveInteger,
  s0 as RegExpPostalCode,
  O as RegExpQQNumber,
  v as RegExpRungDate,
  L as RegExpRungDateStrict,
  A as RegExpSocialCreditCode,
  t as RegExpSocialCreditCodeStrict,
  x as RegExpStockA,
  i0 as RegExpStrongPassword,
  s as RegExpSubNet,
  R0 as RegExpTWIDCard,
  k as RegExpTelPhone,
  o as RegExpThunder,
  e as RegExpTrain,
  u as RegExpURL,
  t0 as RegExpUserName,
  i as RegExpUuid,
  r as RegExpVersion,
  b as RegExpVideoUrlPath,
  n0 as RegExpWXNumber,
  f as RegExpWindowsDirPath,
  p as RegExpWindowsFilePath,
  l0 as RegMilitaryCertificate,
  T as RegProvince
};