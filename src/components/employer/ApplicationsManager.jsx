import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { UserCircle2, ExternalLink, Mail, MessageSquare } from "lucide-react";

const ApplicationsManager = () => {
    const [applications, setApplications] = useState([
        { id: 1, name: "Артем Иванов", role: "Middle Frontend", status: "pending", date: "Сегодня, 14:20" },
        { id: 2, name: "Анна Саргсян", role: "Junior UI/UX", status: "accepted", date: "Вчера, 10:05" },
        { id: 3, name: "Игорь Петров", role: "Middle Frontend", status: "rejected", date: "12 марта" },
        { id: 4, name: "Марина Ли", role: "React Developer", status: "reserve", date: "11 марта" },
    ]);

    const updateStatus = (id, newStatus) => {
        setApplications(apps => apps.map(a => a.id === id ? { ...a, status: newStatus } : a));
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'accepted': return 'bg-green-500';
            case 'rejected': return 'bg-destructive';
            case 'reserve': return 'bg-blue-500';
            default: return 'bg-slate-400';
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">Отклики соискателей ({applications.length})</h3>
            </div>

            <div className="grid gap-4">
                {applications.map((app) => (
                    <Card key={app.id} className="overflow-hidden border-l-4" style={{ borderLeftColor: `var(--${app.status === 'pending' ? 'slate-400' : getStatusColor(app.status)})` }}>
                        <CardContent className="p-4">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                                        <UserCircle2 className="h-6 w-6 text-muted-foreground" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm">{app.name}</h4>
                                        <p className="text-xs text-muted-foreground">Отклик на: <span className="text-primary">{app.role}</span></p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                                    <div className="text-[10px] text-muted-foreground mr-2">{app.date}</div>

                                    {/* Статус-менеджер по ТЗ */}
                                    <Select
                                        defaultValue={app.status}
                                        onValueChange={(val) => updateStatus(app.id, val)}
                                    >
                                        <SelectTrigger className="w-[140px] h-8 text-xs">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="pending">На рассмотрении</SelectItem>
                                            <SelectItem value="accepted">Принят</SelectItem>
                                            <SelectItem value="reserve">В резерве</SelectItem>
                                            <SelectItem value="rejected">Отклонен</SelectItem>
                                        </SelectContent>
                                    </Select>

                                    <div className="flex gap-1">
                                        <Button variant="outline" size="icon" className="h-8 w-8 text-primary" title="Профиль">
                                            <ExternalLink className="h-4 w-4" />
                                        </Button>
                                        <Button variant="outline" size="icon" className="h-8 w-8 text-primary" title="Написать">
                                            <Mail className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ApplicationsManager;