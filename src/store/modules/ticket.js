import Vue from 'vue'

export default {
    actions: {
        getTickets: function(ctx){
            Vue.http.get('https://test-api.mybimiboo.dev/api/items').then(
                response => {
                    ctx.commit('setTickets', response.body.data)
                    console.log('courses',response)
                    
                }, 
                error => { console.log('error', error) }
            )
        },
        // newCourse(ctx, course){
        //     Vue.http.post('admin/add-course', { 
        //         lang: VueCookies.get("default_language_sign"), 
        //         course: course.course,
        //         image: course.image
        //     }).then(
        //         response => {
        //             if (response.body.success) {
        //                 Alerts.success(response.body.message)
        //                 router.push({ name: 'CoursesInnerMainPage' })
        //             }else{
        //                 Alerts.warn(response.body.message) 
        //             }
        //         }, 
        //         error => { Alerts.error(error.body.message) }
        //     )
        // },
        // getCourses: function(ctx, pages){
        //     Vue.http.get('admin/courses?lang='+ VueCookies.get("default_language_sign") + '&filter=pages' + '&perpage=' + pages.perpage + '&page=' + pages.goto).then(
        //         response => {
        //             console.log('courses',response)
        //             if (response.body.success) {
        //                 ctx.commit('setPagination', {
        //                     total: response.body.data.courses.total,
        //                     per_page: response.body.data.courses.per_page,
        //                     current_page: response.body.data.courses.current_page,
        //                     last_page: response.body.data.courses.last_page,
        //                 })
        //                 ctx.commit('setCourses', response.body.data.courses.data)
        //             }else{
        //                 Alerts.warn(response.body.message) 
        //             }
        //         }, 
        //         error => { Alerts.error(error.body.message) }
        //     )
        // },
        // getCourse(ctx, id){
        //     Vue.http.get('admin/courses/'+ id +'?lang='+ VueCookies.get("default_language_sign")).then(
        //         response => {
        //             if (response.body.success) {
        //                 ctx.commit('setCourse', response.body.data.course)
        //             }else{
        //                 Alerts.warn(response.body.message)
        //                 router.push({ name: 'CoursesInnerMainPage' })
        //             }
        //         }, 
        //         error => { Alerts.error(error.body.message) }
        //     )
        // },
    },
    mutations: {
        setTickets(state, tickets) {
            state.tickets = tickets
        }
        // setCourses(state, courses) {
        //     state.courses = courses
        // },
        // setCourse(state, course){
        //     state.course = course
        // },
        // setPagination(state, pagination){
        //     state.pagination = pagination
        // }
    },
    state: {
        tickets: []
        // courses: [],
        // course: {},
        // pagination: {
        //     total: 0,
        //     per_page: 5,

        //     current_page: 1,
        //     last_page: 1,
        // },
        // newcourse: {
        //     course_type:'',
        //     course_title: '',
        //     course_short_desciption: '',
        //     course_description: '',
        //     course_requirements: [], 
        //     course_outcomes: [],
        //     course_subjects: [],

        //     course_video_provider: 1, 
        //     course_video_url: '', 
        //     course_thumbnail: '',
            
        //     course_status: 1,
        //     course_language: null,
        //     course_category: null,
        //     course_level: 1,
        //     is_package: false,
        //     course_type: 2,
        //     course_price: 0,
        //     course_discount: 0,
        //     course_configurations: {
        //         weeks: 0
        //     }
        // }
    },
    getters:{
        tickets(state){
            return state.tickets
        }
        // getCourses(state){
        //     return state.courses
        // },
        // getCourse(state){
        //     return state.course
        // },
        // getCoursePagination(state){
        //     return state.pagination
        // },
        // getNewCourse(state){
        //     return state.newcourse
        // },
        // getCourseLevel(state){
        //     return [
        //         { en: 'Beginner', kz: 'Beginner kz', ru: 'Ru'},
        //         { en: 'Intermediate', kz: 'Intermadiat kz', ru: ''},
        //         { en: 'Advanced', kz: 'Advanced kz', ru: ''}
        //     ]
        // }
    }
}