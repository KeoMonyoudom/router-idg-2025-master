import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './routes.js'

import { createI18n } from 'vue-i18n'

/**
 * About
Register
User
Services
Projects
Setting
 */
const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'khm',
    messages: {
        en: {
            hello: 'hello world',
            about: 'About',
            register: 'Register',
            user: 'User',
            services: 'Services',
            projects: 'Projects',
            setting: 'Setting',
                services: "Services",
      company: "Company",
      helpful: "Helpful Links",
      legal: "Legal",
      downloads: "Downloads",

      coaching: "1on1 Coaching",
        companyReview: "Company Review",
        accountsReview: "Accounts Review",
        hr: "HR Consulting",
        seo: "SEO Optimisation",
        about: "About",
        team: "Meet the Team",
        contact: "Contact",
        faqs: "FAQs",
        chat: "Live Chat",
        accessibility: "Accessibility",
        returns: "Returns Policy",
        refund: "Refund Policy",
        stats: "Hiring-3 Statistics",
        calendar: "Marketing Calendar",
        infographic: "SEO Infographics"
        },
        khm: {
            hello: 'សួស្តី​ពិភពលោក',
            about: 'អំពីយើង',
            register: 'ចុះឈ្មោះ',
            user: 'អ្នកប្រើប្រាស់',
            services: 'សេវាកម្ម',
            projects: 'គម្រោង',
            setting: 'ការកំណត់',
            services: "សេវាកម្ម",
      company: "ក្រុមហ៊ុន",
      helpful: "តំណភ្ជាប់មានប្រយោជន៍",
      legal: "ផ្នែកច្បាប់",
      downloads: "ទាញយក",

        coaching: "ការបណ្ដុះបណ្ដាលផ្ទាល់",
        companyReview: "ការត្រួតពិនិត្យក្រុមហ៊ុន",
        accountsReview: "ការត្រួតពិនិត្យគណនេយ្យ",
        hr: "ការពិគ្រោះយោបល់ HR",
        seo: "បុគ្គលិកផ្នែក SEO",
        about: "អំពីយើង",
        team: "ជួបក្រុមការងារ",
        contact: "ទំនាក់ទំនង",
        faqs: "សំណួរញឹកញាប់",
        chat: "ជជែកផ្ទាល់",
        accessibility: "ភាពងាយស្រួល",
        returns: "គោលនយោបាយត្រឡប់",
        refund: "គោលនយោបាយសងប្រាក់",
        stats: "ស្ថិតិជួលការងារ-3",
        calendar: "ប្រតិទិនទីផ្សារ",
        infographic: "Infographics SEO"

        }
      }
}
)

const app = createApp(App)
app.use(router)
app.use(i18n)


app.mount('#app')
