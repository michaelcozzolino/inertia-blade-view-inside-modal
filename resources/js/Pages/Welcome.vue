<template>
    <MDBBtn
        color="primary"
        aria-controls="exampleModal"
        @click="modal=true"
    >
        Launch modal
    </MDBBtn>
    <MDBModal
        id="exampleModal"
        tabindex="-1"
        labelledby="exampleModalLabel"
        v-model="modal"
    >
        <MDBModalBody v-html="modalContent"></MDBModalBody>
    </MDBModal>
</template>

<script>
export default {
    name: "Welcome",

    props: ['modalContent'],

    data() {
        return {
            modal: false,
        }
    }
}
</script>

<style scoped>

</style>
