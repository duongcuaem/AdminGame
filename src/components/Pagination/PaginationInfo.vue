<script setup lang="ts">
import { PaginationInfo } from '@/objects';

const props = defineProps<{
  id?: string;
  class?: string;
  payload: PaginationInfo;
}>();
const totalPages = computedEager(() => Math.ceil(props.payload.total / props.payload.limit));
const firstIndex = computedEager(() => (props.payload.page - 1) * props.payload.limit + 1);
const lastIndex = computedEager(() => Math.min(props.payload.page * props.payload.limit, props.payload.total));

</script>

<template>
  <div :id="props.id" :class="props.class" class="d-flex align-items-center gap-1 text-nowrap">
    <span>
      Show
    </span>
    <LimitSwitch />
    <span> results </span>
    <span class="d-none d-sm-block"> above </span>
    <strong class="d-none d-sm-block">
      {{ props.payload.total }}
    </strong>
    <span class="d-none d-sm-block"> page results </span>
    <strong class="d-none d-sm-block">
      {{ props.payload.page }}
    </strong>
    <span class="d-none d-sm-block"> above </span>
    <strong class="d-none d-sm-block">
      {{ totalPages }}
    </strong>
    <span class="d-none d-sm-block"> page. </span>
  </div>
</template>
