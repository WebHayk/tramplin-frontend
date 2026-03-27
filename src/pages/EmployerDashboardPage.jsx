import React from 'react';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from "@/components/ui/tabs";
import {
    Building2,
    PlusCircle,
    ListChecks,
    Users2,
    LayoutDashboard,
    ChevronRight
} from "lucide-react";

import CompanyProfile from "@/components/employer/CompanyProfile";
import CreateOpportunity from "@/components/employer/CreateOpportunity";
import OpportunitiesList from "@/components/employer/OpportunitiesList";
import ApplicationsManager from "@/components/employer/ApplicationsManager";

const EmployerDashboardPage = () => {
    return (
        <div className="flex-1 flex flex-col bg-[#f8fafc] min-h-[calc(100vh-64px)]">
            {/* Header section с градиентом или мягким фоном */}
            <div className="bg-white border-b px-8 py-8">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-5">
                            <div className="h-14 w-14 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                                <Building2 className="h-8 w-8" />
                            </div>
                            <div>
                                <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Панель управления</h1>
                                <p className="text-slate-500 font-medium mt-1">Добро пожаловать, КодИнсайт</p>
                            </div>
                        </div>
                        {/* Можно добавить быструю статистику в хедер */}
                        <div className="hidden lg:flex gap-8">
                            <div className="text-right">
                                <p className="text-xs font-bold uppercase text-slate-400 tracking-wider">Активных вакансий</p>
                                <p className="text-xl font-bold text-slate-900">12</p>
                            </div>
                            <div className="text-right">
                                <p className="text-xs font-bold uppercase text-slate-400 tracking-wider">Новых откликов</p>
                                <p className="text-xl font-bold text-primary">0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto p-6 md:p-8">
                <Tabs defaultValue="opportunities">

                    {/* Кастомный TabsList без стандартных стилей shadcn */}
                    <TabsList>

                        <TabsTrigger
                            value="profile"
                            className="group relative flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl transition-all duration-200
                                       data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm data-[state=active]:ring-1 data-[state=active]:ring-slate-200
                                       hover:bg-slate-100/50 hover:text-slate-900 text-slate-500 font-semibold"
                        >
                            <div className="flex items-center gap-3">
                                <Building2 className="h-4 w-4 transition-transform group-hover:scale-110" />
                                <span>Профиль компании</span>
                            </div>
                            <ChevronRight className="h-4 w-4 opacity-0 group-data-[state=active]:opacity-100 transition-all -translate-x-2 group-data-[state=active]:translate-x-0" />
                        </TabsTrigger>

                        <TabsTrigger
                            value="create"
                            className="group relative flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl transition-all duration-200
                                       data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm data-[state=active]:ring-1 data-[state=active]:ring-slate-200
                                       hover:bg-slate-100/50 hover:text-slate-900 text-slate-500 font-semibold"
                        >
                            <div className="flex items-center gap-3">
                                <PlusCircle className="h-4 w-4 transition-transform group-hover:scale-110" />
                                <span>Новая возможность</span>
                            </div>
                            <ChevronRight className="h-4 w-4 opacity-0 group-data-[state=active]:opacity-100 transition-all -translate-x-2 group-data-[state=active]:translate-x-0" />
                        </TabsTrigger>

                        <TabsTrigger
                            value="opportunities"
                            className="group relative flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl transition-all duration-200
                                       data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm data-[state=active]:ring-1 data-[state=active]:ring-slate-200
                                       hover:bg-slate-100/50 hover:text-slate-900 text-slate-500 font-semibold"
                        >
                            <div className="flex items-center gap-3">
                                <ListChecks className="h-4 w-4 transition-transform group-hover:scale-110" />
                                <span>Мои публикации</span>
                            </div>
                            <ChevronRight className="h-4 w-4 opacity-0 group-data-[state=active]:opacity-100 transition-all -translate-x-2 group-data-[state=active]:translate-x-0" />
                        </TabsTrigger>

                        <TabsTrigger
                            value="applications"
                            className="group relative flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl transition-all duration-200
                                       data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm data-[state=active]:ring-1 data-[state=active]:ring-slate-200
                                       hover:bg-slate-100/50 hover:text-slate-900 text-slate-500 font-semibold"
                        >
                            <div className="flex items-center gap-3">
                                <Users2 className="h-4 w-4 transition-transform group-hover:scale-110" />
                                <span>Отклики</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="bg-primary/10 text-primary text-[10px] px-1.5 py-0.5 rounded-md">NEW</span>
                                <ChevronRight className="h-4 w-4 opacity-0 group-data-[state=active]:opacity-100 transition-all -translate-x-2 group-data-[state=active]:translate-x-0" />
                            </div>
                        </TabsTrigger>
                    </TabsList>

                    {/* Контентная панель */}
                    <div className="flex-1 bg-white rounded-3xl border border-slate-200 shadow-sm p-8 min-h-[600px]">
                        <TabsContent value="profile" className="mt-0 focus-visible:outline-none">
                            <CompanyProfile />
                        </TabsContent>

                        <TabsContent value="create" className="mt-0 focus-visible:outline-none">
                            <CreateOpportunity />
                        </TabsContent>

                        <TabsContent value="opportunities" className="mt-0 focus-visible:outline-none">
                            <OpportunitiesList />
                        </TabsContent>

                        <TabsContent value="applications" className="mt-0 focus-visible:outline-none">
                            <ApplicationsManager />
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </div>
    );
};

export default EmployerDashboardPage;