<template>
    <div>
        <!-- 2) Go to the new-post page, cut the entire form and paste it
        here. Also cut the entire script, which includes the methods handling saving
        and cancelling and the imports. Paste it here -->
        <!-- 3) Go to the new-post file and adjust the imports. Next
        step there. -->
        <form @submit.prevent="onSave">
            <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>

            <AppControlInput v-model="editedPost.title">Title</AppControlInput>

            <AppControlInput v-model="editedPost.thumbnailLink">Thumbnail Link</AppControlInput>

            <AppControlInput control-type="textarea" v-model="editedPost.content">Content</AppControlInput>
            <AppButton type="submit">Save</AppButton>

            <AppButton type="button" style="margin-left: 10px" btn-style="cancel" @click="onCancel">Cancel
            </AppButton>
        </form>
    </div>
</template>

<script>
import AppControlInput from "@/components/UI/AppControlInput"
import AppButton from "@/components/UI/AppButton"
export default {
    components: {
        AppControlInput,
        AppButton
    },
    props: {
        /* 10) Accept the loadedPost object from the new-post
        component as props. */
        post: { 
            type: Object,
            required: false
        }


    },
    data() {
        /* 12) I want to initialize my data with the post
        object I might get if it is available. So editedPost
        will check if post is true, in which case I want to
        create a new object, which is base on the incoming
        object, and for that I can use the spread operator. 
        The spread operator will spread all the properties of
        the post object we´re receiving and pass them to a 
        new object. If post is false, I will initialize
         editedPost with a default object. It´s important
         to note that I'm using the ternary operator for 
         the if statement.*/
        return {
            editedPost: this.post 
            ? {...this.post}
            : {
                author: "",
                title: "",
                thumbnailLink: "",
                content: ""
            }
        }
        /* 13) Now, if I go to the admin page, and I click
        on a post I can´t see the form to edit the post. To
        solve this, next steps are in the PostList component.*/
    },
    methods: {
        onSave() {
            console.log(this.editedPost)
        },
        onCancel() {
            this.$router.push('/admin')
        }
    }

}
</script>


<style scoped>
</style>