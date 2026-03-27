import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserPlus, Trash2, ShieldCheck } from "lucide-react";

const AdminStaffManager = () => {
    return (
        <div className="p-8 space-y-8">
            <div className="flex justify-between items-center border-b pb-6">
                <div>
                    <h3 className="text-xl font-bold text-slate-900">Команда кураторов</h3>
                    <p className="text-sm text-slate-500">Создание и управление учетными записями модераторов</p>
                </div>
                <Button className="gap-2 bg-slate-900 hover:bg-slate-800">
                    <UserPlus className="h-4 w-4" /> Добавить куратора
                </Button>
            </div>

            <div className="grid gap-4">
                {[
                    { name: "Арам Варданян", email: "aram@tramplin.am", role: "Moderator", date: "12.01.2026" },
                    { name: "Лусине Мкртчян", email: "lusine@tramplin.am", role: "Moderator", date: "05.02.2026" }
                ].map((staff, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-xl border bg-slate-50">
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center border shadow-sm text-primary font-bold">
                                {staff.name[0]}
                            </div>
                            <div>
                                <p className="font-bold text-sm text-slate-900">{staff.name}</p>
                                <p className="text-xs text-slate-500">{staff.email}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="text-right">
                                <p className="text-xs font-bold text-slate-900">{staff.role}</p>
                                <p className="text-[10px] text-slate-400 tracking-tight">Добавлен: {staff.date}</p>
                            </div>
                            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-red-500">
                                <Trash2 className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminStaffManager;