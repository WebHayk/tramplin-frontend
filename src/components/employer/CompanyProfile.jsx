import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
    Globe,
    Instagram,
    ImagePlus,
    Edit3,
    ExternalLink,
    Building2,
    MapPin,
    Check
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const CompanyProfile = () => {
    const [isEditing, setIsEditing] = useState(false);

    // Моковые данные компании
    const [companyData, setCompanyData] = useState({
        name: "КодИнсайт",
        industry: "iGaming & Fintech",
        description: "Мы — международная продуктовая компания, специализирующаяся на разработке высоконагруженных систем. Наш стек включает React, Node.js и сложные решения в области обработки данных.",
        website: "https://codeinsight.ee",
        social: "@codeinsight_team",
        location: "Таллин / Удаленно"
    });

    if (!isEditing) {
        // РЕЖИМ ПРЕВЬЮ (Read-only)
        return (
            <div className="space-y-8 animate-in fade-in duration-500">
                <div className="flex justify-between items-start">
                    <div className="flex gap-6 items-center">
                        <div className="h-20 w-20 bg-slate-100 rounded-2xl flex items-center justify-center border-2 border-white shadow-sm overflow-hidden">
                            {/* Здесь может быть логотип */}
                            <Building2 className="h-10 w-10 text-slate-400" />
                        </div>
                        <div>
                            <div className="flex items-center gap-3">
                                <h2 className="text-3xl font-bold text-slate-900">{companyData.name}</h2>
                                <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100 border-none">
                                    Верифицирован
                                </Badge>
                            </div>
                            <p className="text-slate-500 flex items-center gap-2 mt-1">
                                <MapPin className="h-4 w-4" /> {companyData.location}
                            </p>
                        </div>
                    </div>
                    <Button onClick={() => setIsEditing(true)} variant="outline" className="gap-2">
                        <Edit3 className="h-4 w-4" /> Редактировать
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-6">
                        <div>
                            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">О компании</h4>
                            <p className="text-slate-700 leading-relaxed text-lg">
                                {companyData.description}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                                <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Сфера</p>
                                <p className="font-semibold text-slate-900">{companyData.industry}</p>
                            </div>
                            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                                <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Сайт</p>
                                <a href={companyData.website} target="_blank" className="font-semibold text-primary flex items-center gap-1 hover:underline">
                                    {companyData.website.replace('https://', '')} <ExternalLink className="h-3 w-3" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // РЕЖИМ РЕДАКТИРОВАНИЯ (Форма)
    return (
        <div className="space-y-6 max-w-full animate-in slide-in-from-bottom-2 duration-400">
            <div className="flex justify-between items-center pb-4 border-b">
                <div>
                    <h3 className="text-xl font-bold">Настройка профиля</h3>
                    <p className="text-sm text-muted-foreground">Изменения отразятся на всех ваших публикациях</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="ghost" onClick={() => setIsEditing(false)}>Отмена</Button>
                    <Button onClick={() => setIsEditing(false)} className="gap-2 px-6">
                        <Check className="h-4 w-4" /> Сохранить
                    </Button>
                </div>
            </div>

            <div className="grid gap-6 py-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                        <Label>Название компании</Label>
                        <Input
                            value={companyData.name}
                            onChange={(e) => setCompanyData({...companyData, name: e.target.value})}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label>Сфера деятельности</Label>
                        <Input
                            value={companyData.industry}
                            onChange={(e) => setCompanyData({...companyData, industry: e.target.value})}
                        />
                    </div>
                </div>

                <div className="grid gap-2">
                    <Label>Краткое описание (Markdown поддерживается)</Label>
                    <Textarea
                        className="min-h-[150px]"
                        value={companyData.description}
                        onChange={(e) => setCompanyData({...companyData, description: e.target.value})}
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                        <Label>Веб-сайт</Label>
                        <div className="relative">
                            <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input className="pl-9" value={companyData.website} onChange={(e) => setCompanyData({...companyData, website: e.target.value})} />
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label>Социальные сети</Label>
                        <div className="relative">
                            <Instagram className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input className="pl-9" value={companyData.social} onChange={(e) => setCompanyData({...companyData, social: e.target.value})} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyProfile;