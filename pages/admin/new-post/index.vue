<template>
    <!-- 5) In this component I must have a form
    that handles the creation of a new post. -->
    <div class="admin-new-post-page">
        <section class="new-post-form">
            <!--6) Inside the form I´ll include
            some inputs and two buttons. These 
            are reusable UI components that I 
            can find in the components section
            inside the UI folder. An explanation
            of what they include can be find inside
            each component.   -->
            <!-- 10) Add submit event to the form so that 
            we save button is clicked the onSave function
            is call. -->
            <form @submit.prevent="onSave">
                <!-- 7) Add the reusable component AppControlInput 4 times,
                with the defaul type input, expect for the last one, which I
                set to textarea.  I also pass the label text which we´ll be
                received in the component as slot. Don´t forger to import and
                register this component.-->
                <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>

                <AppControlInput v-model="editedPost.title">Title</AppControlInput>

                <AppControlInput v-model="editedPost.thumbnailLink">Thumbnail Link</AppControlInput>

                <AppControlInput control-type="textarea" v-model="editedPost.content">Content</AppControlInput>

                <!-- 8) Add 2 buttons, a save and a cancel buttons. 
                Don´t forger to import and register this component.-->
                <AppButton type="submit">Save</AppButton>

                <!-- 12) On click, the cancel button should call the onCancel method -->
                <AppButton type="button" style="margin-left: 10px" btn-style="cancel" @click="onCancel">Cancel
                </AppButton>
            </form>
        </section>
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
    data() {
        return {
            /* 9) Create the editedPost, in which we are going to store
            what the user enters in the inputs. */
            editedPost: {
                author: "",
                title: "",
                thumbnailLink: "",
                content: ""
            }
        }
    },
    methods: {
        /* 11) Add the onSave method to save the post.
        For now, just console.log editedPost. When
        I fill in the form I shold see all the data
        I entered in the console.*/
        onSave() {
            console.log(this.editedPost)
        },
        /* 13) Add the onCancel method to navigate 
        back to admin page if the user cancels*/
        onCancel() {
            this.$router.push('/admin')
        }
    }
    // 14) Next steps in the admin page

}
</script>

<style scoped>
</style>