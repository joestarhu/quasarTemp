import { reactive } from 'vue'

const ConfigDict = {
    // 本地化语言(从localsession中获取)
    locale: "user-locale",
    // 外观颜色(从localsession中获取)
    appearance: "auto",
    // 默认分页大小
    pageSize: 10,
    // 分页的可选项
    rowsPerPageOptions: [10, 20, 30, 50],
    // 防抖默认时间:毫秒
    debounce: 500,

    //HiInput的相关参数
    HiInputAppendRequired: 0,
    HiInputAppendQuery: 1,
    HiInputStyle: { width: "200px" },


}

const HiInputObj = {
    // 普通输入
    text: (qProps, i18nLabel = null, value = null, i18nPlaceholder = null) => {
        let params = { outlined: true, "lazy-rules": true, hint: "", clearable: true, dense: true, ...qProps }
        return reactive({ value: value, type: "text", i18nLabel: i18nLabel, i18nPlaceholder: i18nPlaceholder, qProps: params })
    },
    // 必需输入
    textRequired: (qProps, i18nLabel = null, value = null, i18nPlaceholder = null) => {
        let params = { outlined: true, "lazy-rules": true, hint: "", dense: true, ...qProps }
        return reactive({ value: value, type: "text", i18nLabel: i18nLabel, i18nPlaceholder: i18nPlaceholder, hiAppend: ConfigDict.HiInputAppendRequired, qProps: params })
    },
    // 查询输入
    textQuery: (qProps, i18nLabel = null, value = null, i18nPlaceholder = null) => {
        let params = { outlined: true, debounce: ConfigDict.debounce, clearable: true, style: ConfigDict.HiInputStyle, dense: true, ...qProps }
        return reactive({ value: value, type: "text", i18nLabel: i18nLabel, i18nPlaceholder: i18nPlaceholder, hiAppend: ConfigDict.HiInputAppendQuery, qProps: params })
    },
    // 选择输入
    select: (qProps, i18nLabel = null, value = null) => {
        let params = { outlined: true, "lazy-rules": true, hint: '', dense: true, ...qProps }
        return reactive({ value: value, type: "select", i18nLabel: i18nLabel, qProps: params })
    },
    // 选择查询
    selectQuery: (qProps, i18nLabel = null, value = null) => {
        let params = { outlined: true, clearable: true, style: ConfigDict.HiInputStyle, dense: true, ...qProps }
        return reactive({ value: value, type: "select", i18nLabel: i18nLabel, qProps: params })
    },
    // 选择查询(有筛选)
    selectFilter: (qProps, filterFn, i18nLabel = null, value = null) => {
        let params = { outlined: true, "lazy-rules": true, hint: '', dense: true, ...qProps }
        return reactive({ value: value, type: "selectFilter", i18nLabel: i18nLabel, qProps: params, filterFn: filterFn })
    },
}




const HiInputModel = {
    // 普通输入
    text: (qProps, i18nLabel = null, value = null, i18nPlaceholder = null) => {
        let params = { outlined: true, "lazy-rules": true, hint: "", clearable: true, dense: true, ...qProps }
        return reactive({ value: value, type: "text", i18nLabel: i18nLabel, i18nPlaceholder: i18nPlaceholder, qProps: params })
    },
    // 普通选择
    select: (qProps, i18nLabel = null, value = null) => {
        let params = { outlined: true, "lazy-rules": true, hint: '', dense: true, ...qProps }
        return reactive({ value: value, type: "select", i18nLabel: i18nLabel, qProps: params })
    },
}


export { ConfigDict, HiInputObj }