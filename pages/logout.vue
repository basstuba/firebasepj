<template>
    <div class="logout">
        <div>
            <button @click="logout">ログアウト</button>
        </div>
        <div>
            <NuxtLink to="/">戻る</NuxtLink>
        </div>
    </div>
</template>

<script>
import firebase from "../plugins/firebase";
export default {
    methods: {
        logout() {
            firebase.auth()
                .signOut()
                .then(() => {
                    alert("ログアウトが完了しました");
                    this.$router.replace('/');
                });
        },
    },
};
</script>