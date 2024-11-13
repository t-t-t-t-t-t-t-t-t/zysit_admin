<template>
    <div id="myeditor">

    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import E from 'wangeditor'
const emit = defineEmits(['changeContent'])
const { content } = defineProps(['content'])
onMounted(() => {
    const editor = new E('#myeditor')
    editor.create()
    // 设置初始值
    content && editor.txt.html(content)
    editor.config.onchange = (newHtml) => {
        emit('changeContent', newHtml)
    }
})

</script>

<style lang="scss" scoped></style>