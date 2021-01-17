import {buildUISections} from '../../shared/js/ui_builder.js'

const urls = {
    personalInfo: "data/personalInfo.json",
    experience: "data/experience.json",
    skills: "data/skills.json",
    hobby: "data/hobby.json"
}

buildUISections(urls)