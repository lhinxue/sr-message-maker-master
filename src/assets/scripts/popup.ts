import { avatar } from '@/components/Popup/Avatar'
import { bubbles } from '@/components/Popup/BubblesManager'
import { character } from '@/components/Popup/Character'
import { confirm } from '@/components/Popup/Confirm'
import { cropper } from '@/components/Popup/Cropper'
import DataManager from '@/components/Popup/DataManager.vue'
import FontManager from '@/components/Popup/FontManager.vue'
import { input } from '@/components/Popup/Input'
import { loading } from '@/components/Popup/Loading'
import { log } from '@/components/Popup/Log'
import { message } from '@/components/Popup/Message'
import Setting from '@/components/Popup/Setting.vue'
import { createPopupManager } from '@/utils/popup'

export const popupManager = createPopupManager({
  confirm,
  input,
  loading,
  cropper,
  bubbles,
  avatar,
  character,
  log,
  font: { component: FontManager },
  data: { component: DataManager },
  setting: { component: Setting },
  message
})

popupManager.open('loading')
