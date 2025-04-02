import { defineBoot } from '#q-app/wrappers'
import { createI18n } from 'vue-i18n'
import { ConfigDict } from 'src/base/settings'
import messages from 'src/i18n'

export default defineBoot(({ app }) => {
  // 默认读取localStorage中的内容
  let user_locale = localStorage.getItem(ConfigDict.locale) || "zh-CN"

  const i18n = createI18n({
    locale: user_locale,
    globalInjection: true,
    messages
  })

  // Set i18n instance on app
  app.use(i18n)
})
