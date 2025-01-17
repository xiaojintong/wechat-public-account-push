
export const USER_CONFIG = {
  /**
   * 公众号配置
   */
  
  // 公众号APP_ID
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_ID: "wx249a5463441886ea",
  
  // 公众号APP_SECRET
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_SECRET: "471e05259f5727cdb5f658f834b32e92",
  
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
    
   
    
    /** 星座运势 */
    horoscope: true,
    
    /** 生日消息和节日消息 */
    birthdayMessage: true,
  },
  
 
  
  
  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔
   */
  USERS: [
    {
      // 想要发送的人的名字
      name: "彤彤大宝贝",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oCN6K5lQkfDXgt0C7J2V7oaO9LVY",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "RvHBNFY-VGhtuvd0EJOsvWdbvouPQOND500hRdjKwgA",
      // 所在省份
      province: "湖南",
      // 所在城市
      city: "衡阳",
      // 新历生日, 仅用作获取星座运势, 格式必须
      horoscopeDate: '04-29',
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      horoscopeDateType: '今日',
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://www.xzw.com/fortune/",
      // 专属节日提醒，如果你在这里填写了节日提醒，就不会执行FESTIVALS的提醒了, 和FESTIVALS的配置方法相同，可以往下查看，我这里就不重复写了
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {"type": "*生日", "name": "猪头大宝贝", "year": "2004", "date": "04-29"},
        {"type": "节日", "name": "毕业旅行日", "year": "2023", "date": "06-10"},
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {"type": "生日", "name": "李四", "year": "1996", "date": "09-31"},
        {"type": "节日", "name": "被搭讪纪念日", "year": "2021", "date": "09-01"},
      ],
      // 专属纪念日/倒数日，如果你在这里填写了纪念日/倒数日，就不会计算CUSTOMIZED_DATE_LIST的日子了, 和CUSTOMIZED_DATE_LIST的配置方法相同，可以往下查看，我这里就不重复写了
      customizedDateList: [
        // 在一起的日子
        {"keyword": "love_day", date: "2021-02-05"},
        // 毕业旅行日
        {"keyword": "marry_day", date: "2023-06-10"},
       
      ]
    },
    {
      name: "111",
      id: "oCN6K5lrfcNROcs3CI-12mrt3kHQ",
      useTemplateId: "",
      province: "",
      city: "",
      horoscopeDate: '',
      horoscopeDateType: '',
      openUrl: "https://wangxinleo.cn",
      festivals: [],
      customizedDateList: []
    },
    {
      name: "老婆2",
      id: "",
      useTemplateId: "",
      province: "",
      city: "",
      horoscopeDate: '',
      horoscopeDateType: '',
      openUrl: "https://wangxinleo.cn",
      festivals: [],
      customizedDateList: []
    },
    {
      name: "老婆3",
      id: "",
      useTemplateId: "",
      province: "",
      city: "",
      horoscopeDate: '',
      horoscopeDateType: '',
      openUrl: "https://wangxinleo.cn",
      festivals: [],
      customizedDateList: []
    },
    // 你可以不断按格式往下增加
    // ...
  ],
  
  /**
   * 【推送完成提醒】 相关，主要用来展示发送是否成功/失败的数据
   */
  
  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: "",
  
  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: "自己",
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "",
    },
    // 你可以不断按格式往下增加
    // ...
  ],
  

  
  
}
