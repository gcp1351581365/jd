/*
京喜农场 Tokens
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
// 每个账号 token 是一个 json，示例如下
// {"farm_jstoken":"f99f415617a17dc39c9cd2780a0369d8","timestamp":"1619517128574","phoneid":"1f1e119884367e0a"}
let JxncTokens = [
  '{"farm_jstoken":"7664d46173c8b4b9abe4fb3c5183510b","timestamp":"1620304788306","phoneid":"1f1e119884367e0a"}',//账号一的京喜农场token
  '{"farm_jstoken":"2e8771ee1b8119f2a574cd9a72c5a414","timestamp":"1620306088096","phoneid":"1f1e119884367e0a"}',//账号二的京喜农场token
  '{"farm_jstoken":"f99f415617a17dc39c9cd2780a0369d8","timestamp":"1619517128574","phoneid":"1f1e119884367e0a"}',//账号三的京喜农场token
  '{"farm_jstoken":"82dc654e2789fdd5a20358787942ce70","timestamp":"1620304290173","phoneid":"1f1e119884367e0a"}',//账号四的京喜农场token
]
// 判断github action里面是否有京喜农场 token 
if (process.env.JXNCTOKENS) {
  if (process.env.JXNCTOKENS.indexOf('&') > -1) {
    console.log(`您的京喜农场 token 选择的是用&隔开\n`)
    JxncTokens = process.env.JXNCTOKENS.split('&');
  } else if (process.env.JXNCTOKENS.indexOf('\n') > -1) {
    console.log(`您的京喜农场 token 选择的是用换行隔开\n`)
    JxncTokens = process.env.JXNCTOKENS.split('\n');
  } else {
    JxncTokens = process.env.JXNCTOKENS.split();
  }
} else if (process.env.JD_COOKIE) {
  console.log(`由于您secret里面未提供 tokens，当种植 APP 种子时，将不能正常进行任务，请提供 token 或 种植非 APP 种子！`)
}
JxncTokens = [...new Set(JxncTokens.filter(item => !!item))]
for (let i = 0; i < JxncTokens.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['JXNCTOKEN' + index] = JxncTokens[i];
}
