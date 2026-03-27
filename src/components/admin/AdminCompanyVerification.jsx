import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, ExternalLink, ShieldCheck, FileText } from "lucide-react";

const AdminCompanyVerification = () => {
    const companies = [
        { id: 1, name: "КодИнсайт", domain: "codeinsight.ee", doc: "Tax_Report_2025.pdf", employeeCount: "50-100" },
        { id: 2, name: "ArmSoft Solutions", domain: "armsoft.am", doc: "Reg_Certificate.pdf", employeeCount: "200+" },
    ];

    return (
        <div className="p-8 space-y-6">
            <div>
                <h3 className="text-2xl font-bold text-slate-900">Верификация бизнеса</h3>
                <p className="text-sm text-slate-500">Подтверждение статуса надежного работодателя</p>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {companies.map((company) => (
                    <div key={company.id} className="group flex items-center justify-between p-6 rounded-2xl border-2 border-slate-100 hover:border-primary/20 transition-all bg-white">
                        <div className="flex items-center gap-6">
                            <div className="h-14 w-14 bg-slate-50 rounded-xl flex items-center justify-center border text-slate-400 group-hover:text-primary transition-colors">
                                <Building2 className="h-8 w-8" />
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <h4 className="font-extrabold text-slate-900">{company.name}</h4>
                                    <Badge className="bg-blue-50 text-blue-600 border-none text-[10px]">Новая заявка</Badge>
                                </div>
                                <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                                    <span className="flex items-center gap-1"><ExternalLink className="h-3 w-3" /> {company.domain}</span>
                                    <span>Сотрудников: {company.employeeCount}</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <Button variant="outline" size="sm" className="gap-2 text-slate-600 border-slate-200">
                                <FileText className="h-4 w-4" /> Документы
                            </Button>
                            <Button size="sm" className="gap-2 bg-primary hover:bg-primary/90">
                                <ShieldCheck className="h-4 w-4" /> Верифицировать
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminCompanyVerification;