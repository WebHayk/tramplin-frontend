import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import {
    Badge
} from "@/components/ui/badge";
import {
    Button
} from "@/components/ui/button";
import {
    Input
} from "@/components/ui/input";
import {
    Search,
    UserX,
    UserCheck,
    MoreVertical,
    Mail,
    ShieldAlert,
    GraduationCap,
    Building2
} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const AdminUserManagement = () => {
    // Список пользователей (Смешанный: соискатели и работодатели)
    const [users] = useState([
        { id: 1, name: "Гайк Саргсян", email: "hayk@example.am", role: "candidate", status: "active", university: "NUACA", date: "01.03.2026" },
        { id: 2, name: "КодИнсайт", email: "hr@codeinsight.ee", role: "employer", status: "active", university: null, date: "15.02.2026" },
        { id: 3, name: "Артур Мхитарян", email: "arthur@test.com", role: "candidate", status: "banned", university: "AUA", date: "10.03.2026" },
        { id: 4, name: "Digitain HR", email: "jobs@digitain.com", role: "employer", status: "active", university: null, date: "20.02.2026" },
    ]);

    return (
        <div className="p-8 space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h3 className="text-2xl font-bold text-slate-900">База пользователей</h3>
                    <p className="text-sm text-slate-500">Управление учетными записями и правами доступа</p>
                </div>
                <div className="relative w-full md:w-80">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input placeholder="Поиск по имени или email..." className="pl-10 rounded-xl border-slate-200" />
                </div>
            </div>

            <div className="bg-white border rounded-2xl shadow-sm overflow-hidden">
                <Table>
                    <TableHeader className="bg-slate-50">
                        <TableRow>
                            <TableHead className="w-[300px]">Пользователь</TableHead>
                            <TableHead>Роль</TableHead>
                            <TableHead>Статус</TableHead>
                            <TableHead>Дата регистрации</TableHead>
                            <TableHead className="text-right">Действия</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.id} className="hover:bg-slate-50/50 transition-colors">
                                <TableCell>
                                    <div className="flex items-center gap-3">
                                        <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold border ${user.status === 'banned' ? 'bg-red-50 text-red-400 border-red-100' : 'bg-primary/5 text-primary border-primary/10'}`}>
                                            {user.name[0]}
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-900 flex items-center gap-2">
                                                {user.name}
                                                {user.status === 'banned' && <ShieldAlert className="h-3 w-3 text-red-500" />}
                                            </div>
                                            <div className="text-xs text-slate-500 flex items-center gap-1">
                                                <Mail className="h-3 w-3" /> {user.email}
                                            </div>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        {user.role === 'candidate' ? (
                                            <Badge variant="outline" className="gap-1 font-semibold text-blue-600 bg-blue-50 border-blue-100">
                                                <GraduationCap className="h-3 w-3" /> Соискатель
                                            </Badge>
                                        ) : (
                                            <Badge variant="outline" className="gap-1 font-semibold text-purple-600 bg-purple-50 border-purple-100">
                                                <Building2 className="h-3 w-3" /> Работодатель
                                            </Badge>
                                        )}
                                    </div>
                                    {user.university && <p className="text-[10px] text-slate-400 mt-1 pl-1 font-medium">{user.university}</p>}
                                </TableCell>
                                <TableCell>
                                    <Badge className={user.status === 'active' ? "bg-green-100 text-green-700 shadow-none border-none" : "bg-red-100 text-red-700 shadow-none border-none"}>
                                        {user.status === 'active' ? "Активен" : "Заблокирован"}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-sm text-slate-500 font-medium">
                                    {user.date}
                                </TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon" className="text-slate-400">
                                                <MoreVertical className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end" className="w-56 rounded-xl shadow-xl border-slate-200">
                                            <DropdownMenuLabel>Управление</DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className="cursor-pointer">Посмотреть профиль</DropdownMenuItem>
                                            <DropdownMenuItem className="cursor-pointer">Редактировать данные</DropdownMenuItem>
                                            <DropdownMenuItem className="cursor-pointer">Сбросить пароль</DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            {user.status === 'active' ? (
                                                <DropdownMenuItem className="text-red-600 font-bold cursor-pointer">
                                                    <UserX className="h-4 w-4 mr-2" /> Заблокировать
                                                </DropdownMenuItem>
                                            ) : (
                                                <DropdownMenuItem className="text-green-600 font-bold cursor-pointer">
                                                    <UserCheck className="h-4 w-4 mr-2" /> Разблокировать
                                                </DropdownMenuItem>
                                            )}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default AdminUserManagement;