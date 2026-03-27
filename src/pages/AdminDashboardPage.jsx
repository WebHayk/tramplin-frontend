import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    ShieldAlert,
    CheckSquare,
    Users,
    Building,
    UserPlus,
    BarChart3,
    Search,
    Lock
} from "lucide-react";

import AdminModeration from "@/components/admin/AdminModeration";
import AdminUserManagement from "@/components/admin/AdminUserManagement";
import AdminCompanyVerification from "@/components/admin/AdminCompanyVerification";
import AdminStaffManager from "@/components/admin/AdminStaffManager";

const AdminDashboard = () => {
    // В реальном приложении тут будет проверка: user.role === 'admin'
    return (
        <div className="flex flex-col bg-slate-50 min-h-screen">
            <header className="bg-slate-900 text-white px-8 py-4 shrink-0 shadow-lg">
                <div className="max-w-[1600px] mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-primary rounded-xl flex items-center justify-center">
                            <ShieldAlert className="h-6 w-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-lg font-bold tracking-tight">Панель управления Трамплин</h1>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Administrator Mode</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-right mr-4">
                            <p className="text-xs font-bold">Гайк Саргсян</p>
                            <p className="text-[10px] text-primary">Главный куратор</p>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center">
                            <Users className="h-5 w-5 text-slate-300" />
                        </div>
                    </div>
                </div>
            </header>

            <Tabs orientation={"vertical"} defaultValue="moderation" className="flex-1 flex flex-col lg:flex-row w-full max-w-[1600px] mx-auto p-6 lg:p-8 gap-8">
                <aside className="w-full lg:w-64 shrink-0">
                    <TabsList className="flex flex-col h-auto w-full bg-transparent p-0 gap-1 items-stretch">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-4 py-2">Контроль контента</p>

                        <TabsTrigger value="moderation" className="justify-start gap-3 px-4 py-3 rounded-xl data-[state=active]:bg-primary data-[state=active]:text-white">
                            <CheckSquare className="h-4 w-4" /> Модерация вакансий
                        </TabsTrigger>

                        <TabsTrigger value="verification" className="justify-start gap-3 px-4 py-3 rounded-xl data-[state=active]:bg-primary data-[state=active]:text-white">
                            <Building className="h-4 w-4" /> Верификация фирм
                        </TabsTrigger>

                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-4 py-2 mt-6">Пользователи</p>

                        <TabsTrigger value="users" className="justify-start gap-3 px-4 py-3 rounded-xl data-[state=active]:bg-primary data-[state=active]:text-white">
                            <Users className="h-4 w-4" /> База соискателей
                        </TabsTrigger>

                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-4 py-2 mt-6">Администрирование</p>

                        <TabsTrigger value="staff" className="justify-start gap-3 px-4 py-3 rounded-xl data-[state=active]:bg-primary data-[state=active]:text-white">
                            <Lock className="h-4 w-4" /> Команда кураторов
                        </TabsTrigger>
                    </TabsList>
                </aside>

                <main className="flex-1">
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm min-h-[700px] overflow-hidden">
                        <TabsContent value="moderation" className="m-0"><AdminModeration /></TabsContent>
                        <TabsContent value="verification" className="m-0"><AdminCompanyVerification /></TabsContent>
                        <TabsContent value="users" className="m-0"><AdminUserManagement /></TabsContent>
                        <TabsContent value="staff" className="m-0"><AdminStaffManager /></TabsContent>
                    </div>
                </main>
            </Tabs>
        </div>
    );
};

export default AdminDashboard;