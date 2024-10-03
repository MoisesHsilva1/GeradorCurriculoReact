import { Routes, Route } from 'react-router-dom'
import { ResumeTemplateOne } from '../PagesResumeTemplates/ResumeTemplate1'
import { ResumeTemplateTwo } from '../PagesResumeTemplates/ResumeTemplate2'
import { ResumeTemplateThree } from '../PagesResumeTemplates/ResumeTemplate3'
import { Inital } from '../PagesResumeTemplates/Inital'

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/ResumeTemplateOne" element={<ResumeTemplateOne />} />
            <Route path="/ResumeTemplateTwo" element={<ResumeTemplateTwo />} />
            <Route path="/ResumeTemplateThree" element={<ResumeTemplateThree />} />
            <Route path="/" element={<Inital />} />

        </Routes>
    )
}