<template>
    <div class="confirm">
        <h1>仮登録完了</h1>
        <p>仮登録が完了しました。メールをご確認ください。</p>
        <button @click="backRoute">戻る</button>
    </div>
</template>

<script>
export default {
    methods: {
        backRoute() {
            this.$router.push('/');
        }
    },
};
</script>