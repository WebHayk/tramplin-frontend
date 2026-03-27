import React, { useState } from 'react';
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ShieldCheck, Eye, EyeOff, Globe, Lock } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const CandidateSettings = () => {
    const [isPublic, setIsPublic] = useState(true);
    const [hideApplications, setHideApplications] = useState(false);

    return (
        <div className="space-y-8 max-w-2xl">
            <div>
                <h3 className="text-xl font-bold">Приватность и доступ</h3>
                <p className="text-sm text-slate-500 mt-1">Управляйте тем, кто может видеть ваш профиль и активность</p>
            </div>

            <div className="space-y-6">
                {/* ГЛАВНЫЙ ПЕРЕКЛЮЧАТЕЛЬ НЕТВОРКИНГА */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex gap-4">
                        <div className={`h-10 w-10 rounded-full flex items-center justify-center ${isPublic ? 'bg-green-100 text-green-600' : 'bg-slate-200 text-slate-500'}`}>
                            {isPublic ? <Globe className="h-5 w-5" /> : <Lock className="h-5 w-5" />}
                        </div>
                        <div>
                            <Label className="text-base font-bold">Публичный профиль</Label>
                            <p className="text-xs text-slate-500">Ваше резюме будет доступно всем авторизованным пользователям</p>
                        </div>
                    </div>
                    <Switch checked={isPublic} onCheckedChange={setIsPublic} />
                </div>

                <div className="space-y-4 px-2">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label className="text-sm font-semibold">Скрывать историю откликов</Label>
                            <p className="text-xs text-slate-500">Друзья не увидят, на какие вакансии вы подавались</p>
                        </div>
                        <Switch checked={hideApplications} onCheckedChange={setHideApplications} />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label className="text-sm font-semibold">Показывать карьерные интересы</Label>
                            <p className="text-xs text-slate-500">Позволяет друзьям предлагать вам релевантные вакансии</p>
                        </div>
                        <Switch defaultChecked />
                    </div>
                </div>

                <Alert className="bg-primary/5 border-primary/20 mt-10">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    <AlertTitle className="text-primary font-bold">Безопасность данных</AlertTitle>
                    <AlertDescription className="text-xs text-slate-600">
                        Работодатели всегда видят ваши данные при прямом отклике, независимо от настроек приватности профиля.
                    </AlertDescription>
                </Alert>
            </div>
        </div>
    );
};

export default CandidateSettings;