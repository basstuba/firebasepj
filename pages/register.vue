<template>
    <div class="register">
        <div>
            <label>
                メールアドレス: <input type="email" v-model="email" required />
            </label>
        </div>
        <div>
            <label>
                パスワード: <input type="password" v-model="password" required />
            </label>
        </div>
        <div>
            <button @click="register">新規登録</button>
        </div>
        <div>
            <NuxtLink to="/">戻る</NuxtLink>
        </div>
    </div>
</template>

<script>
import firebase from "../plugins/firebase";
export default {
    data() {
        return {
            email: null,
            password: null,
        };
    },
    methods: {
        register() {
            if (!this.email || !this.password) {
                alert("メールアドレスまたはパスワードが入力されていません。");
                return;
            }
            firebase.auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .then((data) => {
                    data.user.sendEmailVerification().then(() => {
                        this.$router.replace("/confirm");
                    });
                })
                .catch((error) => {
                    switch (error.code) {
                        case "auth/invalid-email":
                            alert("メールアドレスの形式が違います。");
                            break;
                        case "auth/email-already-in-use":
                            alert("このメールアドレスはすでに使われています。");
                            break;
                        case "auth/weak-password":
                            alert("パスワードは6文字以上で入力してください。");
                            break;
                        default:
                            alert("エラーが起きました。しばらくしてから再度お試しください。")
                            break;
                    }
                });
        },
    },
};
</script>