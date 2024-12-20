/* CreatedBy: Daitv-dev */
<script setup lang="ts">
import { PaginationInfo } from '@/objects';
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const props = defineProps({
  id: { type: String, required: false },
  class: { type: String, required: false },
  payload: { type: Object as () => PaginationInfo, required: true },
});

const currPage = computed(() => props.payload.page);
const prevPage = computed(() => currPage.value - 1);
const nextPage = computed(() => currPage.value + 1);
const totalPages = computed(() => Math.ceil(props.payload.total / props.payload.limit));
const displayPages = computed(() => {
  const pages: Array<number | string> = [];
  let prevValue = prevPage.value;
  let nextValue = nextPage.value;
  if (totalPages.value <= 3) {
    for (let i = 1; i <= totalPages.value; i++) {
      pages.push(i);
    }
  } else {
    if (prevValue < 1) {
      prevValue = 1;
      nextValue = 3;
    } else if (nextValue > totalPages.value) {
      prevValue = totalPages.value - 2;
      nextValue = totalPages.value;
    }
    for (let i = prevValue; i <= nextValue; i++) {
      pages.push(i);
    }
    if (prevValue > 1) {
      pages.unshift("...");
      pages.unshift(1);
    }
    if (nextValue < totalPages.value) {
      pages.push("...");
      pages.push(totalPages.value);
    }
  }
  return pages;
});

const emit = defineEmits(["change"]);

const perform = (page: number | string): void => {
  const pageNumber = parseInt(String(page));
  if (pageNumber !== currPage.value) {
    router.push({ query: { ...route.query, page: pageNumber }, hash: route.hash });
    emit("change", pageNumber);
  }
};

const handleFirst = (): void => {
  if (currPage.value !== 1) {
    perform(1);
  }
};

const handlePrev = (): void => {
  const prevValue = prevPage.value;
  if (prevValue > 0) {
    perform(prevValue);
  }
};

const handleNext = (): void => {
  const nextValue = nextPage.value;
  if (nextValue <= totalPages.value) {
    perform(nextValue);
  }
};

const handleLast = (): void => {
  if (currPage.value !== totalPages.value) {
    perform(totalPages.value);
  }
};

const pageInput = ref("");

const isInputValid = computed(() => {
  const pageNumber = parseInt(pageInput.value);
  return !isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= totalPages.value;
});

const handlePageEnter = (): void => {
  const pageNumber = parseInt(pageInput.value);
  if (isInputValid.value) {
    perform(pageNumber);
    pageInput.value = "";
  }
};
</script>

<template>
  <div :id="props.id" :class="[props.class, 'ms-auto hstack gap-2 justify-content-center justify-content-lg-end']">
    <ul class="pagination listjs-pagination">
      <li>
        <Popper :hover="true" :content="t('Go to First Page')">
          <a href="#" class="page pagination-prev" @click.prevent="handleFirst" :disabled="currPage === 1">&lt;&lt;</a>
        </Popper>
      </li>
      <li>
        <Popper :hover="true" :content="t('Go to Previous Page')">
          <a href="#" class="page pagination-prev" @click.prevent="handlePrev" :disabled="currPage === 1">&lt;</a>
        </Popper>
      </li>
      <li :class="{ active: page === currPage }" v-for="page in displayPages" :key="page">
        <div v-if="page === '...'">
          <Popper :hover="true" :content="t('Enter Page...')" data-bs-toggle="dropdown">
            <a class="page dropdown" href="#" target="_self">...</a>
          </Popper>
          <div class="dropdown-menu">
            <div class="hstack gap-2 px-2">
              <input type="number" class="form-control" min="1" :max="totalPages" v-model="pageInput"
                @keyup.enter="handlePageEnter" :placeholder="'1 -> ' + String(totalPages)" />
              <Popper :hover="true" :content="t('Click or Enter')">
                <button class="btn btn-secondary waves-effect waves-light" :disabled="!isInputValid"
                  @click="handlePageEnter">Go</button>
              </Popper>
            </div>
          </div>
        </div>
        <div v-else>
          <Popper :hover="true"
            :content="page === currPage ? t('Current Page') : t('Go to Page (x)', { x: String(page) })">
            <a class="page" href="#" target="_self" @click.prevent="perform(page)">{{ page }}</a>
          </Popper>
        </div>
      </li>
      <li>
        <Popper :hover="true" :content="t('Go to Next Page')">
          <a href="#" class="page pagination-next" @click.prevent="handleNext"
            :disabled="currPage === totalPages">&gt;</a>
        </Popper>
      </li>
      <li>
        <Popper :hover="true" :content="t('Go to Last Page')">
          <a href="#" class="page pagination-next" @click.prevent="handleLast"
            :disabled="currPage === totalPages">&gt;&gt;</a>
        </Popper>
      </li>
    </ul>
  </div>
</template>
