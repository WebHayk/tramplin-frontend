import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import {
    MoreHorizontal,
    Eye,
    Users,
    Edit3,
    Archive,
    Search
} from "lucide-react";
import { Input } from "@/components/ui/input";

const OpportunitiesList = () => {
    // Моковые данные для демонстрации
    const [items] = useState([
        { id: 1, title: "Middle React Developer", type: "Вакансия", status: "Active", views: 452, applies: 12, date: "10.03.2026" },
        { id: 2, title: "Junior UI/UX Designer", type: "Стажировка", status: "Draft", views: 0, applies: 0, date: "15.03.2026" },
        { id: 3, title: "React Meetup Yerevan", type: "Мероприятие", status: "Closed", views: 1200, applies: 85, date: "01.02.2026" },
    ]);

    const getStatusStyle = (status) => {
        switch (status) {
            case 'Active': return 'bg-green-500/10 text-green-600 border-green-200';
            case 'Draft': return 'bg-amber-500/10 text-amber-600 border-amber-200';
            case 'Closed': return 'bg-slate-500/10 text-slate-600 border-slate-200';
            default: return '';
        }
    };

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">Ваши публикации</h3>
                <div className="relative w-64">
                    <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Поиск по названию..." className="pl-8 h-9" />
                </div>
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-muted/50">
                            <TableHead className="w-[300px]">Название</TableHead>
                            <TableHead>Тип</TableHead>
                            <TableHead>Статус</TableHead>
                            <TableHead className="text-center">Статистика</TableHead>
                            <TableHead className="text-right">Действия</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {items.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell className="font-medium">
                                    {item.title}
                                    <div className="text-[10px] text-muted-foreground mt-1">Создано: {item.date}</div>
                                </TableCell>
                                <TableCell>
                                    <Badge variant="outline" className="font-normal">{item.type}</Badge>
                                </TableCell>
                                <TableCell>
                                    <Badge className={`${getStatusStyle(item.status)} border shadow-none`}>
                                        {item.status === 'Active' ? 'Активна' : item.status === 'Draft' ? 'Черновик' : 'Закрыта'}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                                        <span className="flex items-center gap-1"><Eye className="h-3 w-3" /> {item.views}</span>
                                        <span className="flex items-center gap-1"><Users className="h-3 w-3 text-primary" /> {item.applies}</span>
                                    </div>
                                </TableCell>
                                <TableCell className="text-right">
                                    <div className="flex justify-end gap-2">
                                        <Button variant="ghost" size="icon" className="h-8 w-8"><Edit3 className="h-4 w-4 text-muted-foreground" /></Button>
                                        <Button variant="ghost" size="icon" className="h-8 w-8"><Archive className="h-4 w-4 text-muted-foreground" /></Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default OpportunitiesList;