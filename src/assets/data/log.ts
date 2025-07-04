import type { LogData } from "@/components/Popup/Log/types"


const log: LogData[] = [
  {
    time: '2024-12-29',
    text: [
      {
        text: '因为工作原因以后可能没办法及时更新，需要新角色的时候可以使用自定义角色功能',
        highlight: true
      },
      {
        text: '增加角色',
        info: ['乱破', '星期日', '忘归人']
      },
      {
        text: '增加头像',
        info: [
          '飞霄•健体',
          '貊泽•健体',
          '梦境迷钟',
          '银狼•开场',
          '乱破•开场',
          '知更鸟•韶华',
          '星期日•韶华'
        ]
      }
    ]
  },
  {
    time: '2024-10-03',
    text: [
      {
        text: '增加角色',
        info: '灵砂'
      },
      {
        text: '优化代码'
      }
    ]
  },
  {
    time: '2024-09-22',
    text: [
      {
        text: '优化截图功能',
        info: '使用截图功能生成的短信图片会附带该短信的全部信息，可以使用导入功能导入该短信',
        highlight: true
      },
      {
        text: '增加截图质量设置',
        info: '同时修复了截图会根据屏幕分辨率异常膨胀的问题'
      },
      {
        text: '优化数据管理功能',
        info: '把短信列表文件(.srm)、自定义角色列表文件(.src)或者短信图片拖放到主界面可以快速导入数据'
      }
    ]
  },
  {
    time: '2024-09-11',
    text: [
      {
        text: '增加角色',
        info: ['飞霄', '椒丘', '貊泽']
      },
      {
        text: '增加头像',
        info: ['白露•仁医', '椒丘•仁医']
      }
    ]
  },
  {
    time: '2024-08-01',
    text: [
      {
        text: '增加角色',
        info: ['翡翠', '云璃', '仙舟三月七']
      },
      {
        text: '增加头像',
        info: ['流萤•愿景', '装甲「萨姆」•愿景']
      },
      {
        text: '增加表情',
        info: ['帕姆展览馆第13弹', '帕姆展览馆第14弹', '帕姆展览馆第15弹', '米游社新表情']
      },
      {
        text: '增加对话气泡',
        info: '光阴莫负'
      },
      {
        text: '优化同名角色卡片名称显示'
      }
    ]
  },
  {
    time: '2024-06-26',
    text: [
      {
        text: '增加角色',
        info: ['流萤', '波提欧']
      },
      {
        text: '修复了一些小问题'
      }
    ]
  },
  {
    time: '2024-05-23',
    text: [
      {
        text: '修复短信预览长文本重叠'
      },
      {
        text: '优化短信预览选项相关的动画效果'
      }
    ]
  },
  {
    time: '2024-05-22',
    text: [
      {
        text: '头像选择界面增加了单独的按钮用于切换为游戏角色'
      },
      {
        text: '修复切换为游戏角色不会自动修改名字的问题'
      },
      {
        text: '修复中断自动播放时选项内容丢失的问题'
      },
      {
        text: '修复自动播放时Loading动画导致的抖动'
      }
    ]
  },
  {
    time: '2024-05-17',
    text: [
      {
        text: '重构框架',
        info: '将大部分通用组件拆分到单独的组件库<a href="https://www.npmjs.com/package/star-rail-vue" target="_blank">star-rail-vue</a>',

        highlight: true
      },
      {
        text: '替换所有头像资源'
      },
      {
        text: '移除图片预加载',
        info: '预加载的图片太多偶尔会导致网站渲染卡顿和异常'
      },
      {
        text: '优化了一些显示效果'
      },
      {
        text: '增加下载模式相关设置',
        info: '下载异常的时候可以尝试切换下载模式'
      },
      {
        text: '增加角色',
        info: ['知更鸟', '砂金']
      },
      {
        text: '增加头像',
        info: [
          '点心生命',
          '钟表小子',
          '折纸小鸟',
          '哈努兄弟',
          '砂金•命中',
          '托帕•命中',
          '卡卡瓦夏',
          '仓鼠球骑士',
          '一周年纪念',
          '黄泉•暗袭',
          '波提欧•暗袭',
          '星·同谐',
          '穹·同谐'
        ]
      },
      {
        text: '增加气泡',
        info: ['怪物酒馆', '影城逐梦记']
      }
    ]
  },
  {
    time: '2024-03-28',
    text: [
      {
        text: '增加PWA相关功能',
        info: ['增加离线访问，加载完成后没有网络也可以使用', '增加图片缓存，减少加载时间'],
        highlight: true
      },
      {
        text: '增加角色',
        info: ['黄泉', '加拉赫', '爱德华医生', '钟表餐厅']
      },
      {
        text: '增加表情包',
        info: ['米游社新表情', '帕姆展览馆第12弹']
      },
      {
        text: '优化移动端的显示和操作'
      },
      {
        text: '优化气泡设置的显示模式'
      },
      {
        text: '优化消息拖拽提示'
      },
      {
        text: '优化弹出窗口',
        info: '修复Loading界面层级过高的问题'
      }
    ]
  },
  {
    time: '2024-03-02',
    text: [
      {
        text: '增加角色',
        info: ['花火']
      }
    ]
  },
  {
    time: '2024-02-13',
    text: [
      {
        text: '修复自动保存可能失效的问题'
      },
      {
        text: '修复旧数据库兼容问题'
      },
      {
        text: '增加角色',
        info: ['黑天鹅', '米沙', '界种科科员']
      },
      {
        text: '增加头像',
        info: ['桑博•幻象', '花火•幻象']
      },
      {
        text: '增加表情包',
        info: ['米游社新表情', '帕姆展览馆第11弹']
      }
    ]
  },
  {
    time: '2024-01-29',
    text: [
      {
        text: '增加角色',
        info: '真理医生'
      },
      {
        text: '数据导出/导入修改为二进制文件',
        info: '旧版的json文件现在无法导入'
      },
      {
        text: '重写了部分底层框架',
        highlight: true
      }
    ]
  },
  {
    time: '2024-01-02',
    text: [
      {
        text: '增加角色',
        info: ['阮·梅', '雪衣']
      },
      {
        text: '增加头像',
        info: ['真理医生•教研', '阮•梅•教研', '开拓者•星轨']
      },
      {
        text: '增加表情包',
        info: ['完善表情分组，跟游戏内保持一致', '补充米游社星穹铁道相关的所有表情']
      },
      {
        text: '增加对话气泡',
        info: '星体培养皿'
      },
      {
        text: '增加图片预加载进度显示'
      },
      {
        text: '优化了部分样式和细节'
      }
    ]
  },
  {
    time: '2023-12-10',
    text: [
      {
        text: '增加GIF动图支持'
      }
    ]
  },
  {
    time: '2023-12-07',
    text: [
      {
        text: '增加角色',
        info: ['银枝', '寒鸦']
      }
    ]
  },
  {
    time: '2023-11-16',
    text: [
      {
        text: '增加角色',
        info: ['藿藿', '部分NPC']
      },
      {
        text: '增加头像'
      }
    ]
  },
  {
    time: '2023-11-05',
    text: [
      {
        text: '增加了快速修改头像和名字为游戏角色的功能',
        info: '在修改头像菜单点击左侧的头像预览可以选择游戏角色'
      }
    ]
  },
  {
    time: '2023-10-31',
    text: [
      {
        text: '增加角色',
        info: ['托帕&账账', '桂乃芬']
      },
      {
        text: '增加消息管理窗口',
        info: '点击消息的名字可以打开消息管理窗口，目前可以修改昵称和自动播放时的等待时间'
      },
      {
        text: '优化自定义角色创建',
        info: '不上传头像的话会使用默认头像'
      }
    ]
  },
  {
    time: '2023-10-13',
    text: [
      {
        text: '增加角色',
        info: '镜流'
      },
      {
        text: '增加对话气泡',
        info: '次元扑满'
      },
      {
        text: '优化键盘操作',
        info: [
          'Enter/Esc可以执行弹出窗口确认/关闭操作',
          'Enter可以快速聚焦输入框',
          'Tab可以快速打开角色选择页',
          'Insert可以快速创建短信',
          '发送消息后会继续聚焦在输入框',
          'Ctrl+Enter可以在发送消息后自动切换到该短信里的上一个角色',
          'Ctrl+S可以保存当前打开的短信'
        ]
      }
    ]
  },
  {
    time: '2023-09-25',
    text: [
      {
        text: '增加数据加载超时提醒'
      },
      {
        text: '增加重置数据库选项'
      },
      {
        text: '增加与游戏UI风格一致的确认窗口和输入窗口'
      },
      {
        text: '修复拖拽排序后不会保存'
      },
      {
        text: '修复自动短信标题不会自动更新'
      },
      {
        text: '重做修改昵称',
        info: '现在点击昵称会弹出输入框'
      },
      {
        text: '重做头像选择',
        info: '现在点击头像会弹出头像选择窗口，且可以保存多个自定义头像'
      }
    ]
  },
  {
    time: '2023-09-22',
    text: [
      {
        text: '增加数据加载失败提醒'
      },
      {
        text: '补充符玄、玲可个性签名'
      }
    ]
  },
  {
    time: '2023-09-19',
    text: [
      {
        text: '增加角色',
        info: ['符玄', '玲可']
      },
      {
        text: '优化移动端部分样式'
      }
    ]
  },
  {
    time: '2023-09-08',
    text: [
      {
        text: '修复移动端无法修改图片和自定义角色创建失效'
      },
      {
        text: '修复清空自定义角色导致的功能异常'
      }
    ]
  },
  {
    time: '2023-09-03',
    text: [
      {
        text: '优化角色选择分页'
      },
      {
        text: '修复PC端修改表情/图片失效'
      },
      {
        text: '修复删除内容时空间占用信息没有刷新'
      }
    ]
  },
  {
    time: '2023-08-31',
    text: [
      {
        text: '增加角色',
        info: '丹恒•饮月'
      },
      {
        text: '增加自定义角色头像预剪裁'
      },
      {
        text: '增加角色选择分页和表情包分页'
      },
      {
        text: '优化细节',
        info: '增加了一些动画效果'
      }
    ]
  },
  {
    time: '2023-08-28',
    text: [
      {
        text: '增加图片剪裁',
        info: '上传头像、发送图片、修改图片现在可以做简单的裁剪'
      },
      {
        text: '数据管理增加空间占用数据'
      },
      {
        text: '替换部分素材'
      },
      {
        text: '优化代码'
      }
    ]
  },
  {
    time: '2023-08-27',
    text: [
      {
        text: '优化表情包修改',
        info: '现在点击表情包会弹出表情包选择页而不是上传图片'
      },
      {
        text: '优化图片加载',
        info: '现在会预加载部分图像和所有角色头像、表情包'
      },
      {
        text: '增加数据管理功能',
        info: '可以导出/导入/删除短信和自定义角色'
      },
      {
        text: '替换了部分失效头像'
      }
    ]
  },
  {
    time: '2023-08-24',
    text: [
      {
        text: '增加图片自动压缩'
      },
      {
        text: '修复短信菜单头像显示错误',
        info: '因为自定义角色可以重名，所有现在私聊消息的头像会显示最新短信的第一条消息所用的头像，个性签名也以第一条消息为准'
      },
      {
        text: '重构代码'
      }
    ]
  },
  {
    time: '2023-08-16',
    text: [
      {
        text: '增加对话气泡修改'
      },
      {
        text: '优化设置菜单'
      },
      {
        text: '优化细节'
      }
    ]
  },
  {
    time: '2023-08-14',
    text: [
      {
        text: '增加部分NPC角色',
        info: '帕姆等'
      },
      {
        text: '增加角色选择页右键返回'
      },
      {
        text: '优化细节'
      }
    ]
  },
  {
    time: '2023-08-11',
    text: [
      {
        text: '完善字体修改功能'
      },
      {
        text: '优化界面'
      }
    ]
  },
  {
    time: '2023-08-06',
    text: [
      {
        text: '增加角色',
        info: ['卡芙卡', '卢卡']
      },
      {
        text: '增加开拓任务和日常任务消息'
      }
    ]
  },
  {
    time: '2023-08-06',
    text: [
      {
        text: '修复部分浏览器无法下载图片和排版错误'
      },
      {
        text: '增加删除短信和自定义角色的确认'
      },
      {
        text: '修复滚动提示不会自动消失'
      }
    ]
  },
  {
    time: '2023-07-31',
    text: [
      {
        text: '增加角色',
        info: '刃'
      },
      {
        text: '增加新的帕姆表情'
      },
      {
        text: '修复滚动提示不会自动消失'
      }
    ]
  },
  {
    time: '2023-07-16',
    text: [
      {
        text: '修复头像边框问题',
        author: 'conglinyizhi',
        url: 'https://github.com/conglinyizhi'
      }
    ]
  },
  {
    time: '2023-07-16',
    text: [
      {
        text: '增加回复选项'
      }
    ]
  },
  {
    time: '2023-07-13',
    text: [
      {
        text: '增加任务消息'
      }
    ]
  },
  {
    time: '2023-07-11',
    text: [
      {
        text: '增加根据回复长度决定消息加载动画时长'
      },
      {
        text: '增加消息滚动提示'
      },
      {
        text: '修复新消息不会自动展开分组'
      }
    ]
  },
  {
    time: '2023-07-10',
    text: [
      {
        text: '修复自定义角色重名导致的角色错误'
      },
      {
        text: '修复标题无法修改'
      },
      {
        text: '修复新消息不会自动展开分组'
      }
    ]
  },
  {
    time: '2023-07-07',
    text: [
      {
        text: '增加菜单细节'
      }
    ]
  },
  {
    time: '2023-07-03',
    text: [
      {
        text: '增加角色',
        info: ['罗刹', '驭空']
      }
    ]
  },
  {
    time: '2023-06-22',
    text: [
      {
        text: '增加加载动画'
      },
      {
        text: '增加修改字体功能'
      },
      {
        text: '增加自定义头像功能'
      }
    ]
  },
  {
    time: '2023-06-19',
    text: [
      {
        text: '增加男女主切换'
      }
    ]
  },
  {
    time: '2023-06-13',
    text: [
      {
        text: '优化角色选择组件'
      },
      {
        text: '增加表情包功能'
      }
    ]
  },
  {
    time: '2023-05-29',
    text: [
      {
        text: '增加横屏提示'
      },
      {
        text: '增加自动播放功能'
      },
      {
        text: '优化菜单按钮'
      }
    ]
  },
  {
    time: '2023-05-14',
    text: [
      {
        text: '增加修改已发送图片'
      }
    ]
  },
  {
    time: '2023-05-04',
    text: [
      {
        text: '增加自定义角色'
      },
      {
        text: '增加通知消息'
      },
      {
        text: '修复拖拽排序导致的样式异常'
      },
      {
        text: '增加彩蛋'
      }
    ]
  },
  {
    time: '2023-04-28',
    text: [
      {
        text: '增加消息拖拽排序'
      }
    ]
  },
  {
    time: '2023-04-26',
    text: [
      {
        text: '初版上线'
      }
    ]
  }
]

export default log
