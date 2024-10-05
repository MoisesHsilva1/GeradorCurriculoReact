import { Routes, Route } from 'react-router-dom'
import { ResumeTemplateOne } from '../PagesResumeTemplates/ResumeTemplate1'
import { ResumeTemplateTwo } from '../PagesResumeTemplates/ResumeTemplate2'
import { Inital } from '../PagesResumeTemplates/Inital'

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/ResumeTemplateOne" element={<ResumeTemplateOne />} />
            <Route path="/ResumeTemplateTwo" element={<ResumeTemplateTwo />} />
            <Route path="/" element={<Inital />} />

        </Routes>
    )
}