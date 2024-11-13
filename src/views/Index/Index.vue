<template>
    <div>
        <uploadImage :image="imageUrl" @UploadImage="handleUploadImage"></uploadImage>
    </div>
</template>

<script setup lang="js">
import { ref } from 'vue';
import uploadImage from '@/components/UploadImage/UploadImage.vue';
const emit = defineEmits(['getImgUrl'])
const imageUrl = ref('')
function handleUploadImage(image) {
    console.log(image)
    imageUrl.value = image
}

</script>

<style lang="scss" scoped></style>
