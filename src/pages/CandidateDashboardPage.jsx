import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    UserCircle,
    Briefcase,
    Users,
    Settings,
    Bookmark,
    ChevronRight,
    GraduationCap
} from "lucide-react";

import CandidateProfile from "@/components/candidate/CandidateProfile";
import CandidateApplications from "@/components/candidate/CandidateApplications";
import ProfessionalNetwork from "@/components/candidate/ProfessionalNetwork";
import CandidateSettings from "@/components/candidate/CandidateSettings";

const CandidateDashboardPage = () => {
    return (
        <div className="flex flex-col bg-[#f8fafc] min-h-[calc(100vh-64px)]">
            <header className="bg-white border-b px-8 py-6 shrink-0 z-10">
                <div className="max-w-[1440px] mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                            <UserCircle className="h-6 w-6" />
                        </div>
                        <div>
                            <h1 className="text-lg font-bold text-slate-900 leading-tight">Мой Трамплин</h1>
                            <p className="text-xs text-slate-500 font-medium italic">Студент NUACA</p>
                        </div>
                    </div>
                </div>
            </header>

            <Tabs
                key={"candidate-tabs"}
                defaultValue="profile"
                orientation="vertical"
                className="flex-1 flex flex-col lg:flex-row w-full max-w-[1440px] mx-auto p-6 lg:p-10 gap-10"
            >
                <aside className="w-full lg:w-72 shrink-0">
                    <TabsList className="flex flex-col h-auto w-full bg-transparent p-0 gap-2 items-stretch">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-4 mb-2">Личное</p>

                        <TabsTrigger value="profile" className="justify-between px-4 py-3 rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:ring-1 data-[state=active]:ring-slate-200">
                            <div className="flex items-center gap-3">
                                <GraduationCap className="h-4 w-4" /> <span className="font-semibold text-sm">Профиль & Резюме</span>
                            </div>
                            <ChevronRight className="h-4 w-4 opacity-40" />
                        </TabsTrigger>

                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-4 mb-2 mt-4">Карьера</p>

                        <TabsTrigger value="applications" className="justify-between px-4 py-3 rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:ring-1 data-[state=active]:ring-slate-200">
                            <div className="flex items-center gap-3">
                                <Briefcase className="h-4 w-4" /> <span className="font-semibold text-sm">Мои отклики</span>
                            </div>
                            <ChevronRight className="h-4 w-4 opacity-40" />
                        </TabsTrigger>

                        <TabsTrigger value="favorites" className="justify-between px-4 py-3 rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:ring-1 data-[state=active]:ring-slate-200">
                            <div className="flex items-center gap-3">
                                <Bookmark className="h-4 w-4" /> <span className="font-semibold text-sm">Избранное</span>
                            </div>
                            <ChevronRight className="h-4 w-4 opacity-40" />
                        </TabsTrigger>

                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-4 mb-2 mt-4">Сообщество</p>

                        <TabsTrigger value="network" className="justify-between px-4 py-3 rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:ring-1 data-[state=active]:ring-slate-200">
                            <div className="flex items-center gap-3">
                                <Users className="h-4 w-4" /> <span className="font-semibold text-sm">Сеть контактов</span>
                            </div>
                            <ChevronRight className="h-4 w-4 opacity-40" />
                        </TabsTrigger>

                        <TabsTrigger value="settings" className="justify-between px-4 py-3 rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:ring-1 data-[state=active]:ring-slate-200">
                            <div className="flex items-center gap-3">
                                <Settings className="h-4 w-4" /> <span className="font-semibold text-sm">Приватность</span>
                            </div>
                            <ChevronRight className="h-4 w-4 opacity-40" />
                        </TabsTrigger>
                    </TabsList>
                </aside>

                <main className="flex-1 min-w-0">
                    <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm p-6 lg:p-12 min-h-[700px]">
                        <TabsContent value="profile" className="m-0 focus-visible:outline-none">
                            <CandidateProfile />
                        </TabsContent>
                        <TabsContent value="applications" className="m-0 focus-visible:outline-none">
                            <CandidateApplications />
                        </TabsContent>
                        <TabsContent value="network" className="m-0 focus-visible:outline-none">
                            <ProfessionalNetwork />
                        </TabsContent>
                        <TabsContent value="settings" className="m-0 focus-visible:outline-none">
                            <CandidateSettings />
                        </TabsContent>
                    </div>
                </main>
            </Tabs>
        </div>
    );
};

export default CandidateDashboardPage;