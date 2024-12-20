<script lang="ts" setup>
import PaginationInfo from './PaginationInfo.vue';
import PaginationNav from './PaginationNav.vue';

const props = defineProps<{
  payload: any;
  navOnly?: boolean;
}>();
</script>
<template>
  <div class="d-flex px-3 px-lg-0 flex-wrap gap-3 align-items-center border-0 pt-0">
    <PaginationInfo v-if="!props.navOnly" :payload="props.payload" />
    <PaginationNav :payload="props.payload" />
  </div>
</template>
