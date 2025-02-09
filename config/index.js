export const config = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_ID: "wx1ce7b5db3b0ac073",

  // 公众号APP_SECRET
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_SECRET: "05649c9f5a20a0b1c30641eec2ba447d",

  // 是否给文字设置多彩颜色, 和emoji不兼容
  // 如果您使用了微信测试号的模板中含有emoji表情，请填 false
  IS_SHOW_COLOR: true,

  // 功能开关,打开：true，关闭：false
  SWITCH: {
    /** 每日天气 */
    weather: true,

    /** 节假日 */
    // 下一休息日综合提醒
    holidaytts: true,

    /** 每日N句 */
    // 金山每日一句
    CIBA: true,
    // 每日一言
    oneTalk: false,
    // 土味情话(彩虹屁)
    earthyLoveWords: true,
    // 朋友圈文案
    momentCopyrighting: false,
    // 毒鸡汤
    poisonChickenSoup: false,
    // 古诗古文
    poetry: false,

    /** 星座运势 */
    horoscope: true,

    /** 生日消息和节日消息 */
    birthdayMessage: true,
  },

  /** 每日一言 */

  // 每日一言的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: "",
  

  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔
   */
  USERS: [
    {
      // 想要发送的人的名字
      name: "腾妹儿",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "otZ8y6flaFatrzLhKJnxXfCWo0pM",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "bRQqbGl_AxoV8G18gz5A1MOot7I0R6ja_7BdlevPdyM",
      // 所在省份
      province: "河北",
      // 所在城市
      city: "沧州",
      // 新历生日, 仅用作获取星座运势, 格式必须
      horoscopeDate: '10-23',
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      horoscopeDateType: '今日',
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "http://biaobai.haoyueyuankong.work/love.html?me=%E8%91%A9%E5%84%BF%E5%93%A5&you=%E8%85%BE%E8%85%BE%E5%AE%9D%E8%B4%9D%E5%84%BF&yi=%E7%9C%A8%E7%9C%BC%E4%B9%8B%E9%97%B4%EF%BC%8C%E6%88%91%E4%BB%AC%E5%B7%B2%E7%BB%8F%E5%9C%A8%E4%B8%80%E8%B5%B7%E8%BF%99%E4%B9%88%E4%B9%85%E4%BA%86%E3%80%82%E6%AF%8F%E6%AF%8F%E6%83%B3%E8%B5%B7%E5%88%9A%E5%BC%80%E5%A7%8B%E5%AF%B9%E4%BD%A0%E5%8A%A8%E6%AD%AA%E5%BF%83%E6%80%9D%E7%9A%84%E6%97%B6%E5%80%99%EF%BC%8C%E6%88%91%E7%9A%84%E5%BF%83%E8%BF%98%E7%A0%B0%E7%A0%B0%E7%9B%B4%E8%B7%B3%E3%80%82%E4%BD%A0%E6%98%AF%E5%94%AF%E4%B8%80%E4%B8%80%E4%B8%AA%E8%83%BD%E8%AE%A9%E6%88%91%E8%A7%89%E5%BE%97%E8%BF%99%E4%B8%AA%E4%B8%96%E7%95%8C%E5%80%BC%E5%BE%97%E7%9A%84%E4%BA%BA%E3%80%82%E6%89%80%E4%BB%A5%E6%9C%AA%E6%9D%A5%E7%9A%84%E6%97%A5%E5%AD%90%EF%BC%8C%E5%B0%B1%E9%BA%BB%E7%83%A6%E4%BD%A0%E5%A4%9A%E5%A4%9A%E7%85%A7%E9%A1%BE%E5%95%A6%EF%BC%81%E5%BD%93%E7%84%B6%EF%BC%8C%E6%88%91%E4%B9%9F%E4%BC%9A%E6%8A%8A%E4%BD%A0%E5%85%BB%E7%9A%84%E7%99%BD%E7%99%BD%E8%83%96%E8%83%96%E7%9A%84%E5%95%A6%E5%93%88%E5%93%88%E5%93%88%EF%BC%81%EF%BC%81%EF%BC%81&wu=%E4%B8%8D%E6%98%AF%E5%A4%AA%E8%8D%89%E7%8E%87%EF%BC%8C%E5%8F%AA%E6%98%AF%E5%B7%B2%E5%85%A5%E5%BF%83&year=2014&yue=5&ri=19",
      // 专属节日提醒，如果你在这里填写了节日提醒，就不会执行FESTIVALS的提醒了, 和FESTIVALS的配置方法相同，可以往下查看，我这里就不重复写了
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {"type": "*生日", "name": "腾妹儿", "year": "1998", "date": "09-04"},
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {"type": "生日", "name": "葩儿哥", "year": "1998", "date": "05-22"},
        {"type": "节日", "name": "Love Memorial Day", "year": "2014", "date": "05-19"},
      ],
      // 专属纪念日/倒数日，如果你在这里填写了纪念日/倒数日，就不会计算CUSTOMIZED_DATE_LIST的日子了, 和CUSTOMIZED_DATE_LIST的配置方法相同，可以往下查看，我这里就不重复写了
      customizedDateList: [
        // 在一起的日子
        {"keyword": "love_day", date: "2014-05-19"},
      ]
    },
  ],

  /**
   * 【推送完成提醒】 相关，主要用来展示发送是否成功/失败的数据
   */

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: "pEpRARsp0iOpm6iEM2AntIkOmGwT0m2RQSpUjyxDAKs",

  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: "自己",
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "otZ8y6dFlmPLZk38b3XlPMI8WlhU",
    },
    // 你可以不断按格式往下增加
    // ...
  ],

  /**
   * 信息配置
   */

  /** 天气相关 */

  // 默认所在省份, USERS 中没填的话, 会默认拿这里的省份
  PROVINCE: "广东",
  // 默认所在城市, USERS 中没填的话, 会默认拿这里的城市
  CITY: "惠州",

  /** 重要节日相关 */

  /**
   * 重要节日，修改名字为对应需要显示的名字, date 仅填月日即可, 请严格按照示例填写
   * type必须填！ 只能 “生日” 和 “节日” 二选一!
   * 
   * --- 阴历配置开始 ---
   * 如果日期使用阴历，请在 “生日” 或 "节日“ 前添加 * 符号
   * --- 阴历配置结束 ---
   * 
   * 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
   * 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
   * 
   * --- 是否展示周岁信息开始 ---
   * isShowAge: true 展示岁数, 仅type为生日生效
   * isShowAge: false 不展示岁数, 仅type为生日生效
   * 删除isShowAge属性，也会不展示岁数
   * --- 是否展示周岁信息结束 ---
   */
  FESTIVALS: [
    // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
    {"type": "*生日", "name": "老婆", "year": "1996", "date": "09-09", isShowAge: true},
    {"type": "节日", "name": "结婚纪念日", "year": "2020", "date": "09-03"},
    // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
    {"type": "生日", "name": "李四", "year": "1996", "date": "09-31", isShowAge: true},
    {"type": "节日", "name": "被搭讪纪念日", "year": "2021", "date": "09-01"},
    // 你可以不断按格式往下增加
    // ...
  ],

  /**
   * 限制重要节日的展示条目, 需要填写数字;
   * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
   * 如果为0, 则默认展示全部
   */
  FESTIVALS_LIMIT: 4,

  /** 日期相关 */

  /** 你现在可以随心增加你认为的所有的需要纪念的日子啦！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "love_date" ，在测试号中就是 {{ love_date.DATA }}
    * */
  CUSTOMIZED_DATE_LIST: [
    // 在一起的日子
    {"keyword": "love_day", date: "2022-09-08"},
    // 结婚纪念日
    {"keyword": "marry_day", date: "2022-09-09"},
    // 退伍日
    {"keyword": "ex_day", date: "2022-09-10"},
    // 你可以不断按格式往下增加
    // ...
  ],

  /** 插槽 */

  /** 你可以在这里写超多的你想显示的内容了！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }}
    * */
  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    {"keyword": "encourage_oneself", contents: "你主要的问题在于读书太少而想得太多"},
    // 这样配置的话，就会每次随机选一句话发送
    {"keyword": "lover_prattle", contents: [
      "因为太喜欢你，所以看谁都像是情敌。",
      "申请成为你爱里的永久居民。",
      "你很傻，你很笨，可我还是很羡慕你，因为你有我",
      "遇见你，就好像捡到了100斤的运气",
    ]},
    // 你可以不断按格式往下增加
    // ...
  ],


}
