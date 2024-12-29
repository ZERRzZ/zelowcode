<script>
export default {
  name: 'MyTableC',
  props: {
    width: { type: String, default: '100%' },
    height: { type: String, default: '100%' },
    cdata: { type: Object },
    cstyle: { type: Object }
  },
  computed: {
    tableData() {
      return this.cdata?.data || []
    },
    tableColumn() {
      return Object.keys(this.cdata?.data?.[0] || {})
    }
  },
  data() {
    return {}
  }
}
</script>

<template>
  <div class="my-table-c" :style="{ width, height }" stripe>
    <span>{{ cstyle.title || cdata.title }}</span>
    <el-table :data="tableData">
      <el-table-column v-for="t in tableColumn" :key="t" :prop="t" :label="t" />
    </el-table>
  </div>
</template>

<style lang="scss" scoped>
.my-table-c {
  display: flex;
  flex-flow: column;
  gap: 1em;

  > span {
    align-self: center;
    font-weight: 800;
    letter-spacing: 1px;
  }
}
</style>
