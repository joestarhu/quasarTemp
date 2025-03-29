[toc]

# 多语言配置
## quasar.config.js
```javascript
    framework: {
			// 配置默认的语言为"zh-CN",简体中文
      lang: "zh-CN",
    },
```

## 追加基础配置文件src/base/settings.js
```javascript
// 在项目文件夹的src下，追加一个base/settings.js文件， 内容如下
// 本地化的语言配置信息我们默认的写入到localsession里面去

const ConfigDict = {
    // 本地化语言(从localsession中获取)
    locale: "user-locale",
}

export {ConfigDict}
```

## 配置src/boot/i18n.js
```javascript
import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'
// 将ConfigDict引入
import { ConfigDict } from 'src/base/settings'
import messages from 'src/i18n'


export default boot(({ app }) => {
  // 默认读取localStorage中的内容，如果没有，设置默认的为"zh-CN"
  let user_locale = localStorage.getItem(ConfigDict.locale) || "zh-CN";

  const i18n = createI18n({
    locale: user_locale,
    globalInjection: true,
    messages
  })

  // Set i18n instance on app
  app.use(i18n)
})
```

## 配置src/i18n
### i18n/index.js
```javascript
import enUS from './en-US'
//追加中文的配置
import zhCN from './zh-CN'

export default {
  'en-US': enUS,
  //追加中文的配置
  'zh-CN': zhCN,
}
```

### i18n/zh-CN



# 外观模式配置(浅色or深色模式)
