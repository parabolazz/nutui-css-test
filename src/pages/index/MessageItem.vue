<template>
  <view
    :id="id"
    :class="index % 2 ? 'ListItemOdd' : 'ListItemEven'"
    style="background-color: red"
  >
    Row {{ index }} : {{ data[index] }}
  </view>
</template>

<script setup lang="ts">
defineProps<{
  id: string;
  index: number;
  data: number[];
}>();
</script>
