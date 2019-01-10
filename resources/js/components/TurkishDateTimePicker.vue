<template>
    <input ref="turkishDatepickerInput"
           :disabled="disabled"
           :dusk="field.attribute"
           :class="{'!cursor-not-allowed': disabled}"
           :value="value"
           :name="field.name"
           :placeholder="placeholder"
           type="text">
</template>

<script>
    import flatpickr   from 'flatpickr'
    import {Turkish} from 'flatpickr/dist/l10n/tr'

    export default {
        props: {
            field:          {
                type: Object,
                required: true,
            },
            value:          {
                type: String,
                required: false,
                default: ''
            },
            placeholder:    {
                type:    String,
                default: () => {
                    return moment().format('DD.MM.YYYY HH:mm:ss')
                },
            },
            disabled:       {
                type:    Boolean,
                default: false,
            },
            dateFormat:     {
                type:    String,
                default: 'd.m.Y H:i:S',
            },
            twelveHourTime: {
                type:    Boolean,
                default: false,
            },
            enableTime:     {
                type:    Boolean,
                default: true,
            },
            enableSeconds:  {
                type:    Boolean,
                default: true,
            }
        },

        data() {
            return {
                flatpickr: null
            }
        },

        mounted() {
            this.$nextTick(() => {
                this.flatpickr = flatpickr(this.$refs.turkishDatepickerInput, {
                    enableTime:    this.enableTime,
                    enableSeconds: this.enableSeconds,
                    onClose:       this.onChange,
                    dateFormat:    this.dateFormat,
                    allowInput:    true,
                    time_24hr:     true,
                    locale:        Turkish
                })
            })
        },

        methods: {
            onChange() {
                this.$emit('change', this.$refs.turkishDatepickerInput.value)
            },
        },
    }
</script>

<style scoped>
    .\!cursor-not-allowed {
        cursor: not-allowed !important;
    }
</style>
