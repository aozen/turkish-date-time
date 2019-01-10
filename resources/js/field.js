Nova.booting((Vue, router) => {
    Vue.component('index-turkish-date-time', require('./components/Index/DateTimeField'));
    Vue.component('detail-turkish-date-time', require('./components/Detail/DateTimeField'));
    Vue.component('form-turkish-date-time', require('./components/Form/DateTimeField'));
})
