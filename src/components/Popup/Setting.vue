<template>
  <Popup :index="props.index">
    <Window
      title="其它设置"
      @close="close"
    >
      <div class="data">
        <div
          class="info"
          title="切换截图的保存模式"
          @click="setting.download = !setting.download"
        >
          <div class="text">
            <span class="label">截图保存</span>
            <span class="value">{{ setting.download ? '下载图片' : '新窗口打开' }}</span>
          </div>
          <Icon
            name="change"
            class="icon"
          />
        </div>
        <div
          class="info"
          title="切换预览背景"
          @click="setting.green = !setting.green"
        >
          <div class="text">
            <span class="label">预览背景</span>
            <span class="value">{{ setting.green ? '绿幕' : '模糊' }}</span>
          </div>
          <Icon
            name="change"
            class="icon"
          />
        </div>
        <div
          class="info"
          title="切换截图的图片质量"
          @click="qualityChange"
        >
          <div class="text">
            <span class="label">截图质量</span>
            <span class="value">{{ setting.quality === 1 ? '高(1600px)' : '低(900px)' }}</span>
          </div>
          <Icon
            name="change"
            class="icon"
          />
        </div>
        <!-- <div
          class="info"
          title="查看更新日志"
          @click="popupManager.open('log')"
        >
          <div class="text">
            <span class="label">最后更新</span>
            <span class="value">{{ Log[0]?.time || '-' }}</span>
          </div>
        </div> -->
      </div>
    </Window>
  </Popup>
</template>

<script lang="ts" setup>
import Log from '@/assets/data/log'
import { popupManager } from '@/assets/scripts/popup'
import { setting } from '@/store/setting'

import { Popup } from '@/components/Common/Popup'

import { Window } from '@/components/Common/Window'
import Icon from '../Common/Icon.vue'

const props = defineProps<{
  name: string
  index: number
}>()

const emits = defineEmits<{
  (event: 'close', name: string): void
}>()

const close = () => {
  emits('close', props.name)
}

const qualityChange = () => {
  if (setting.quality === 1) {
    setting.quality = 0.5
  } else {
    setting.quality = 1
  }
}
</script>

<style lang="stylus" scoped>
$margin = 40px

.data
  margin 40px 0
  width 1000px
  user-select none

  .info
    display flex
    justify-content space-between
    align-items center
    margin-bottom 20px
    border 2px solid rgba(0, 0, 0, 0.2)
    border-radius 10px
    font-size 36px

    &:hover
      background #ddd

      .icon
        color #333

    .text
      display flex
      align-items center
      height 100px

      .label
        display flex
        align-items center
        padding 0 $margin
        width 150px
        height 100%
        border-right 2px solid rgba(0, 0, 0, 0.2)

      .value
        margin 0 $margin
        color #333

    .icon
      margin-right $margin
      color #aaa
</style>
