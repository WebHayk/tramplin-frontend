import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Briefcase,
    Clock,
    CheckCircle2,
    XCircle,
    Star,
    MapPin,
    ExternalLink,
    ChevronRight
} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import { Card, CardContent } from "@/components/ui/card";

const CandidateApplications = () => {
    const [applications] = useState([
        {
            id: 1,
            company: "КодИнсайт",
            role: "Middle React Developer",
            status: "accepted",
            date: "10.03.2026",
            location: "Таллин / Remote"
        },
        {
            id: 2,
            company: "ArmSoft",
            role: "Frontend Intern",
            status: "pending",
            date: "14.03.2026",
            location: "Ереван"
        },
        {
            id: 3,
            company: "Digitain",
            role: "Junior UI/UX Designer",
            status: "rejected",
            date: "05.03.2026",
            location: "Ереван / Office"
        }
    ]);

    const [favorites] = useState([
        { id: 101, company: "Picsart", role: "Creative Engineer", deadline: "До 30 марта", type: "Вакансия" },
        { id: 102, company: "NUACA Event", role: "ArchTech Meetup", deadline: "25 марта", type: "Мероприятие" }
    ]);

    const getStatusConfig = (status) => {
        switch (status) {
            case 'accepted': return { label: "Принят", color: "bg-green-100 text-green-700 border-green-200", icon: <CheckCircle2 className="h-3 w-3" /> };
            case 'rejected': return { label: "Отклонен", color: "bg-red-100 text-red-700 border-red-200", icon: <XCircle className="h-3 w-3" /> };
            case 'pending': return { label: "На рассмотрении", color: "bg-amber-100 text-amber-700 border-amber-200", icon: <Clock className="h-3 w-3" /> };
            default: return { label: "В резерве", color: "bg-blue-100 text-blue-700 border-blue-200", icon: <Clock className="h-3 w-3" /> };
        }
    };

    return (
        <div className="space-y-6">
            <Tabs key={"applications-tab"} orientation={"horizontal"} defaultValue="all-apps">
                <div className="flex justify-between items-center mb-6">
                    <TabsList className="bg-slate-100/50 p-1 rounded-xl flex-row">
                        <TabsTrigger value="all-apps" className="rounded-lg px-6">Мои отклики</TabsTrigger>
                        <TabsTrigger value="wishlist" className="rounded-lg px-6">Избранное</TabsTrigger>
                    </TabsList>
                </div>

                {/* СЕКЦИЯ: ИСТОРИЯ ОТКЛИКОВ */}
                <TabsContent value="all-apps" className="space-y-4 m-0">
                    {applications.map((app) => {
                        const config = getStatusConfig(app.status);
                        return (
                            <Card key={app.id} className="group hover:shadow-md transition-all border-slate-200 overflow-hidden">
                                <CardContent className="p-0">
                                    <div className="flex items-center p-5 gap-5">
                                        <div className="h-12 w-12 rounded-xl bg-slate-50 border flex items-center justify-center shrink-0">
                                            <Briefcase className="h-6 w-6 text-slate-400" />
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h4 className="font-bold text-slate-900 truncate">{app.role}</h4>
                                                <Badge className={`${config.color} border shadow-none flex items-center gap-1.5 py-0 px-2 text-[10px]`}>
                                                    {config.icon} {config.label}
                                                </Badge>
                                            </div>
                                            <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
                                                <span className="text-primary">{app.company}</span>
                                                <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {app.location}</span>
                                                <span>{app.date}</span>
                                            </div>
                                        </div>

                                        <Button variant="ghost" size="icon" className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <ExternalLink className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </TabsContent>

                {/* СЕКЦИЯ: ИЗБРАННОЕ (Планирует откликнуться) */}
                <TabsContent value="wishlist" className="grid grid-cols-1 md:grid-cols-2 gap-4 m-0">
                    {favorites.map((fav) => (
                        <Card key={fav.id} className="border-dashed border-2 bg-slate-50/30 hover:bg-white hover:border-primary/30 transition-all cursor-pointer">
                            <CardContent className="p-5">
                                <div className="flex justify-between items-start mb-3">
                                    <Badge variant="outline" className="text-[10px] uppercase font-bold tracking-tight bg-white">
                                        {fav.type}
                                    </Badge>
                                    <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                                </div>
                                <h4 className="font-bold text-slate-900 mb-1">{fav.role}</h4>
                                <p className="text-sm text-primary font-medium mb-4">{fav.company}</p>
                                <div className="flex items-center justify-between mt-auto">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {fav.deadline}
                  </span>
                                    <Button size="sm" className="h-7 text-[10px] font-bold uppercase tracking-wider">Откликнуться</Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default CandidateApplications;