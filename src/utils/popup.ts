import type { Component, ComputedRef } from 'vue'

type Unpacked<T> = T extends Promise<infer U> ? U : T

export class PopupManager<
  T extends Record<string, Component>,
  O extends Partial<Record<keyof T, (...args: any) => any>> = {},
  C extends Partial<Record<keyof T, () => void>> = {},
  N extends Partial<Record<keyof T, () => void | Promise<void>>> = {}
> {
  constructor(
    private component_raw: T,
    open_cb?: O,
    close_cb?: C,
    confirm_cb?: N
  ) {
    let i: keyof T
    for (i in this.component_raw) {
      const key = i
      this.components[i] = {
        compontnt: markRaw(this.component_raw[i]),
        index: computed(() => {
          return this._popup.value.indexOf(key as any)
        })
      }
    }

    if (open_cb) this.open_cb = open_cb
    if (close_cb) this.close_cb = close_cb
    if (confirm_cb) this.confirm_cb = confirm_cb
  }

  private open_cb: O = {} as O
  private close_cb: C = {} as C
  private confirm_cb: N = {} as N

  components: Record<
    keyof T,
    {
      compontnt: Component
      index: ComputedRef<number>
    }
  > = reactive({}) as any

  private _popup = ref<string[]>([])
  private _currentComponent = computed<keyof T | undefined>(
    () => this._popup.value[this._popup.value.length - 1]
  )

  /** 获取最后打开的组件 */
  get popup() {
    return this._popup.value
  }

  /** 是否有组件显示 */
  hasPopup = () => this._popup.value.length > 0

  /** 是否正在显示Loading组件 */
  isLoading = () => this._currentComponent.value === 'loading'

  /** 获取最后打开的组件 */
  get currentComponent() {
    return this._currentComponent.value
  }

  /** 关闭最后打开的组件 */
  closeCurrentComponent = () => {
    if (this._currentComponent.value) {
      this.close(this._currentComponent.value)
    }
  }

  /** 最后打开组件的确认事件 */
  currentComponentConfirm = async () => {
    if (this._currentComponent.value && this.confirm_cb[this._currentComponent.value]) {
      return await this.confirm_cb[this._currentComponent.value]?.()
    }
  }

  open = async <K extends keyof T>(
    key: K,
    // @ts-ignore
    ...args: K extends keyof O ? (Parameters<O[K]> extends never ? [] : Parameters<O[K]>) : []
    // @ts-ignore
  ): Promise<K extends keyof O ? Unpacked<ReturnType<O[K]>> : void> => {
    const index = this._popup.value.indexOf(key as string)
    if (index !== -1) {
      this._popup.value.splice(index, 1)
    }
    this._popup.value.push(key as string)

    let res
    if (key in this.open_cb) {
      res = await this.open_cb[key]?.(...args)
    }
    return res
  }

  close = <K extends keyof T>(key: K): void => {
    const index = this._popup.value.indexOf(key as string)
    if (index === -1) return
    this._popup.value.splice(index, 1)

    if (key in this.close_cb) {
      this.close_cb[key]?.()
    }
  }
}

type ComponentData<T> = {
  component: Component
  open?: T
  close?: () => void
  confirm?: () => void | Promise<void>
}

export const createPopupManager = <T extends Record<string, ComponentData<any>>>(data: T) => {
  const component: { [K in keyof T]: T[K]['component'] } = {} as any
  const open: { [K in keyof T]: T[K]['open'] } = {} as any
  const close: { [K in keyof T]: T[K]['close'] } = {} as any
  const confirm: { [K in keyof T]: T[K]['confirm'] } = {} as any

  for (const name in data) {
    component[name] = data[name].component
    if (data[name].open) open[name] = data[name].open
    if (data[name].close) close[name] = data[name].close
    if (data[name].confirm) confirm[name] = data[name].confirm
  }

  return new PopupManager(component, open, close, confirm)
}
