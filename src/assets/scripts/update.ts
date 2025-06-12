import log from '@/assets/data/log'
import { KEY } from '@/store/setting'
import { useRegisterSW } from 'virtual:pwa-register/vue'
import type { WatchStopHandle } from 'vue'
import { popupManager } from './popup'
import { timeComparison } from '@/utils/localStorage'
import { setLog } from '@/components/Popup/Log'

export const logCheck = () => {
  setLog(log)
  timeComparison(KEY.UPDATE_KEY, log[0]?.time).then(() => popupManager.open('log'))
}

const { needRefresh, updateServiceWorker } = useRegisterSW()

export const updateCheck = () => {
  const updateWatcher: WatchStopHandle = watchEffect(() => {
    if (needRefresh.value) {
      nextTick(() => {
        updateWatcher()
      })
      popupManager.open('confirm', {
        title: '发现新版本',
        text: ['是否立刻更新？'],
        tip: '如果取消新将会在下次启动时自动更新',
        fn: () => {
          popupManager.open('loading')
          updateServiceWorker(true)
        }
      })
    }
  })
}
