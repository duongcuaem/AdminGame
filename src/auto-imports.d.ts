/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// noinspection JSUnusedGlobalSymbols
// Generated by unplugin-auto-import
// biome-ignore lint: disable
export {}
declare global {
  const EffectScope: typeof import('vue')['EffectScope']
  const clearToken: typeof import('./utils/storage')['clearToken']
  const computed: typeof import('vue')['computed']
  const createApp: typeof import('vue')['createApp']
  const customRef: typeof import('vue')['customRef']
  const defineAsyncComponent: typeof import('vue')['defineAsyncComponent']
  const defineComponent: typeof import('vue')['defineComponent']
  const effectScope: typeof import('vue')['effectScope']
  const getCurrentInstance: typeof import('vue')['getCurrentInstance']
  const getCurrentScope: typeof import('vue')['getCurrentScope']
  const getToken: typeof import('./utils/storage')['getToken']
  const h: typeof import('vue')['h']
  const helpers: typeof import('./utils/helpers')['default']
  const inject: typeof import('vue')['inject']
  const isProxy: typeof import('vue')['isProxy']
  const isReactive: typeof import('vue')['isReactive']
  const isReadonly: typeof import('vue')['isReadonly']
  const isRef: typeof import('vue')['isRef']
  const markRaw: typeof import('vue')['markRaw']
  const nextTick: typeof import('vue')['nextTick']
  const onActivated: typeof import('vue')['onActivated']
  const onBeforeMount: typeof import('vue')['onBeforeMount']
  const onBeforeRouteLeave: typeof import('vue-router')['onBeforeRouteLeave']
  const onBeforeRouteUpdate: typeof import('vue-router')['onBeforeRouteUpdate']
  const onBeforeUnmount: typeof import('vue')['onBeforeUnmount']
  const onBeforeUpdate: typeof import('vue')['onBeforeUpdate']
  const onDeactivated: typeof import('vue')['onDeactivated']
  const onErrorCaptured: typeof import('vue')['onErrorCaptured']
  const onMounted: typeof import('vue')['onMounted']
  const onRenderTracked: typeof import('vue')['onRenderTracked']
  const onRenderTriggered: typeof import('vue')['onRenderTriggered']
  const onScopeDispose: typeof import('vue')['onScopeDispose']
  const onServerPrefetch: typeof import('vue')['onServerPrefetch']
  const onUnmounted: typeof import('vue')['onUnmounted']
  const onUpdated: typeof import('vue')['onUpdated']
  const onWatcherCleanup: typeof import('vue')['onWatcherCleanup']
  const paginationMeta: typeof import('./utils/paginationMeta')['paginationMeta']
  const provide: typeof import('vue')['provide']
  const reactive: typeof import('vue')['reactive']
  const readonly: typeof import('vue')['readonly']
  const ref: typeof import('vue')['ref']
  const resolveComponent: typeof import('vue')['resolveComponent']
  const saveTokenToSession: typeof import('./utils/storage')['saveTokenToSession']
  const saveTokenToStorage: typeof import('./utils/storage')['saveTokenToStorage']
  const shallowReactive: typeof import('vue')['shallowReactive']
  const shallowReadonly: typeof import('vue')['shallowReadonly']
  const shallowRef: typeof import('vue')['shallowRef']
  const stateMfmService: typeof import('./services/UserManager/user-lock.service')['stateMfmService']
  const toNumbArr: typeof import('./utils/commom/toNumbArr')['default']
  const toRaw: typeof import('vue')['toRaw']
  const toRef: typeof import('vue')['toRef']
  const toRefs: typeof import('vue')['toRefs']
  const toValue: typeof import('vue')['toValue']
  const triggerRef: typeof import('vue')['triggerRef']
  const unref: typeof import('vue')['unref']
  const useAttrs: typeof import('vue')['useAttrs']
  const useAudioStore: typeof import('./stores/userManager/userManager.store')['useAudioStore']
  const useAuthStore: typeof import('./stores/auth')['useAuthStore']
  const useCssModule: typeof import('vue')['useCssModule']
  const useCssVars: typeof import('vue')['useCssVars']
  const useId: typeof import('vue')['useId']
  const useLink: typeof import('vue-router')['useLink']
  const useModel: typeof import('vue')['useModel']
  const useNotificationStore: typeof import('./stores/notificationStore')['useNotificationStore']
  const useRoute: typeof import('vue-router')['useRoute']
  const useRouter: typeof import('vue-router')['useRouter']
  const useSlots: typeof import('vue')['useSlots']
  const useTemplateRef: typeof import('vue')['useTemplateRef']
  const useUserInfoStore: typeof import('./stores/userInfoStore')['useUserInfoStore']
  const useUserLockStore: typeof import('./stores/userManager/userlock.store')['useUserLockStore']
  const useUserManagerStore: typeof import('./stores/userManager/userlock.store')['useUserManagerStore']
  const useWebSocket: typeof import('./services/useWebSocket')['useWebSocket']
  const useWebSocketStore: typeof import('./stores/webSocketStore')['useWebSocketStore']
  const userLockService: typeof import('./services/UserManager/user-lock.service')['default']
  const uuidv4: typeof import('uuid')['v4']
  const watch: typeof import('vue')['watch']
  const watchEffect: typeof import('vue')['watchEffect']
  const watchPostEffect: typeof import('vue')['watchPostEffect']
  const watchSyncEffect: typeof import('vue')['watchSyncEffect']
}
// for type re-export
declare global {
  // @ts-ignore
  export type { Component, ComponentPublicInstance, ComputedRef, DirectiveBinding, ExtractDefaultPropTypes, ExtractPropTypes, ExtractPublicPropTypes, InjectionKey, PropType, Ref, MaybeRef, MaybeRefOrGetter, VNode, WritableComputedRef } from 'vue'
  import('vue')
}

// for vue template auto import
import { UnwrapRef } from 'vue'
declare module 'vue' {
  interface GlobalComponents {}
  interface ComponentCustomProperties {
    readonly EffectScope: UnwrapRef<typeof import('vue')['EffectScope']>
    readonly clearToken: UnwrapRef<typeof import('./utils/storage')['clearToken']>
    readonly computed: UnwrapRef<typeof import('vue')['computed']>
    readonly createApp: UnwrapRef<typeof import('vue')['createApp']>
    readonly customRef: UnwrapRef<typeof import('vue')['customRef']>
    readonly defineAsyncComponent: UnwrapRef<typeof import('vue')['defineAsyncComponent']>
    readonly defineComponent: UnwrapRef<typeof import('vue')['defineComponent']>
    readonly effectScope: UnwrapRef<typeof import('vue')['effectScope']>
    readonly getCurrentInstance: UnwrapRef<typeof import('vue')['getCurrentInstance']>
    readonly getCurrentScope: UnwrapRef<typeof import('vue')['getCurrentScope']>
    readonly getToken: UnwrapRef<typeof import('./utils/storage')['getToken']>
    readonly h: UnwrapRef<typeof import('vue')['h']>
    readonly helpers: UnwrapRef<typeof import('./utils/helpers')['default']>
    readonly inject: UnwrapRef<typeof import('vue')['inject']>
    readonly isProxy: UnwrapRef<typeof import('vue')['isProxy']>
    readonly isReactive: UnwrapRef<typeof import('vue')['isReactive']>
    readonly isReadonly: UnwrapRef<typeof import('vue')['isReadonly']>
    readonly isRef: UnwrapRef<typeof import('vue')['isRef']>
    readonly markRaw: UnwrapRef<typeof import('vue')['markRaw']>
    readonly nextTick: UnwrapRef<typeof import('vue')['nextTick']>
    readonly onActivated: UnwrapRef<typeof import('vue')['onActivated']>
    readonly onBeforeMount: UnwrapRef<typeof import('vue')['onBeforeMount']>
    readonly onBeforeRouteLeave: UnwrapRef<typeof import('vue-router')['onBeforeRouteLeave']>
    readonly onBeforeRouteUpdate: UnwrapRef<typeof import('vue-router')['onBeforeRouteUpdate']>
    readonly onBeforeUnmount: UnwrapRef<typeof import('vue')['onBeforeUnmount']>
    readonly onBeforeUpdate: UnwrapRef<typeof import('vue')['onBeforeUpdate']>
    readonly onDeactivated: UnwrapRef<typeof import('vue')['onDeactivated']>
    readonly onErrorCaptured: UnwrapRef<typeof import('vue')['onErrorCaptured']>
    readonly onMounted: UnwrapRef<typeof import('vue')['onMounted']>
    readonly onRenderTracked: UnwrapRef<typeof import('vue')['onRenderTracked']>
    readonly onRenderTriggered: UnwrapRef<typeof import('vue')['onRenderTriggered']>
    readonly onScopeDispose: UnwrapRef<typeof import('vue')['onScopeDispose']>
    readonly onServerPrefetch: UnwrapRef<typeof import('vue')['onServerPrefetch']>
    readonly onUnmounted: UnwrapRef<typeof import('vue')['onUnmounted']>
    readonly onUpdated: UnwrapRef<typeof import('vue')['onUpdated']>
    readonly onWatcherCleanup: UnwrapRef<typeof import('vue')['onWatcherCleanup']>
    readonly paginationMeta: UnwrapRef<typeof import('./utils/paginationMeta')['paginationMeta']>
    readonly provide: UnwrapRef<typeof import('vue')['provide']>
    readonly reactive: UnwrapRef<typeof import('vue')['reactive']>
    readonly readonly: UnwrapRef<typeof import('vue')['readonly']>
    readonly ref: UnwrapRef<typeof import('vue')['ref']>
    readonly resolveComponent: UnwrapRef<typeof import('vue')['resolveComponent']>
    readonly saveTokenToSession: UnwrapRef<typeof import('./utils/storage')['saveTokenToSession']>
    readonly saveTokenToStorage: UnwrapRef<typeof import('./utils/storage')['saveTokenToStorage']>
    readonly shallowReactive: UnwrapRef<typeof import('vue')['shallowReactive']>
    readonly shallowReadonly: UnwrapRef<typeof import('vue')['shallowReadonly']>
    readonly shallowRef: UnwrapRef<typeof import('vue')['shallowRef']>
    readonly toNumbArr: UnwrapRef<typeof import('./utils/commom/toNumbArr')['default']>
    readonly toRaw: UnwrapRef<typeof import('vue')['toRaw']>
    readonly toRef: UnwrapRef<typeof import('vue')['toRef']>
    readonly toRefs: UnwrapRef<typeof import('vue')['toRefs']>
    readonly toValue: UnwrapRef<typeof import('vue')['toValue']>
    readonly triggerRef: UnwrapRef<typeof import('vue')['triggerRef']>
    readonly unref: UnwrapRef<typeof import('vue')['unref']>
    readonly useAttrs: UnwrapRef<typeof import('vue')['useAttrs']>
    readonly useAuthStore: UnwrapRef<typeof import('./stores/auth')['useAuthStore']>
    readonly useCssModule: UnwrapRef<typeof import('vue')['useCssModule']>
    readonly useCssVars: UnwrapRef<typeof import('vue')['useCssVars']>
    readonly useId: UnwrapRef<typeof import('vue')['useId']>
    readonly useLink: UnwrapRef<typeof import('vue-router')['useLink']>
    readonly useModel: UnwrapRef<typeof import('vue')['useModel']>
    readonly useNotificationStore: UnwrapRef<typeof import('./stores/notificationStore')['useNotificationStore']>
    readonly useRoute: UnwrapRef<typeof import('vue-router')['useRoute']>
    readonly useRouter: UnwrapRef<typeof import('vue-router')['useRouter']>
    readonly useSlots: UnwrapRef<typeof import('vue')['useSlots']>
    readonly useTemplateRef: UnwrapRef<typeof import('vue')['useTemplateRef']>
    readonly useUserInfoStore: UnwrapRef<typeof import('./stores/userInfoStore')['useUserInfoStore']>
    readonly useUserLockStore: UnwrapRef<typeof import('./stores/userManager/userlock.store')['useUserLockStore']>
    readonly useWebSocket: UnwrapRef<typeof import('./services/useWebSocket')['useWebSocket']>
    readonly useWebSocketStore: UnwrapRef<typeof import('./stores/webSocketStore')['useWebSocketStore']>
    readonly userLockService: UnwrapRef<typeof import('./services/UserManager/user-lock.service')['default']>
    readonly uuidv4: UnwrapRef<typeof import('uuid')['v4']>
    readonly watch: UnwrapRef<typeof import('vue')['watch']>
    readonly watchEffect: UnwrapRef<typeof import('vue')['watchEffect']>
    readonly watchPostEffect: UnwrapRef<typeof import('vue')['watchPostEffect']>
    readonly watchSyncEffect: UnwrapRef<typeof import('vue')['watchSyncEffect']>
  }
}