import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github, Link as LinkIcon, Edit3, Save, Plus, GraduationCap } from "lucide-react";

const CandidateProfile = () => {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-start">
                <div className="flex gap-6 items-center">
                    <div className="h-24 w-24 bg-slate-200 rounded-full flex items-center justify-center border-4 border-white shadow-md">
                        <span className="text-2xl font-bold text-slate-500">ГС</span>
                    </div>
                    <div className="space-y-1">
                        <h2 className="text-3xl font-bold text-slate-900">Гайк Саргсян</h2>
                        <div className="flex items-center gap-2 text-primary font-medium">
                            <GraduationCap className="h-4 w-4" />
                            <span>NUACA, 4 курс</span>
                        </div>
                    </div>
                </div>
                <Button onClick={() => setIsEditing(!isEditing)} variant={isEditing ? "default" : "outline"} className="gap-2">
                    {isEditing ? <><Save className="h-4 w-4" /> Сохранить</> : <><Edit3 className="h-4 w-4" /> Редактировать</>}
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-6">
                    <section>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Ссылки</h4>
                        <div className="space-y-3">
                            <a href="#" className="flex items-center justify-between p-4 rounded-xl border bg-slate-50/50 hover:bg-slate-50 transition-colors">
                                <div className="flex items-center gap-3">
                                    <LinkIcon className="h-5 w-5" />
                                    <span className="font-semibold text-sm">Резюме</span>
                                </div>
                                <LinkIcon className="h-4 w-4 text-slate-400" />
                            </a>
                        </div>
                    </section>
                </div>

                <div className="space-y-6">
                    <section>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Образование</h4>
                        <div className="p-5 rounded-2xl border-2 border-primary/10 bg-primary/5">
                            <p className="font-bold text-slate-900">National University of Architecture and Construction of Armenia</p>
                            <p className="text-sm text-slate-600">Факультет дизайна и технологий</p>
                            <p className="text-sm font-medium text-primary mt-2">Выпуск в 2026 году</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CandidateProfile;