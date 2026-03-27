import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, X, Eye, Edit2, AlertCircle } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const AdminModeration = () => {
    const [queue, setQueue] = useState([
        { id: 1, title: "Frontend Developer", company: "WebSystems", type: "Вакансия", date: "Сегодня, 12:40", status: "pending" },
        { id: 2, title: "UI/UX Workshop", company: "DesignHub", type: "Мероприятие", date: "Вчера", status: "pending" },
        { id: 3, title: "Blockchain Intern", company: "CryptoArm", type: "Вакансия", date: "15.03.2026", status: "pending" },
    ]);

    const handleAction = (id, action) => {
        // Логика: удаляем из очереди после апрува/режэкта
        setQueue(queue.filter(item => item.id !== id));
    };

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h3 className="text-2xl font-bold text-slate-900">Модерация контента</h3>
                    <p className="text-sm text-slate-500">Очередь проверки новых публикаций ({queue.length})</p>
                </div>
                <Badge variant="outline" className="text-amber-600 bg-amber-50 border-amber-200 gap-1">
                    <AlertCircle className="h-3 w-3" /> Требует внимания
                </Badge>
            </div>

            <div className="border rounded-xl overflow-hidden bg-white">
                <Table>
                    <TableHeader className="bg-slate-50">
                        <TableRow>
                            <TableHead className="font-bold">Название & Компания</TableHead>
                            <TableHead>Тип</TableHead>
                            <TableHead>Дата создания</TableHead>
                            <TableHead className="text-right">Действия</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {queue.map((item) => (
                            <TableRow key={item.id} className="hover:bg-slate-50/50 transition-colors">
                                <TableCell>
                                    <div className="font-bold text-slate-900">{item.title}</div>
                                    <div className="text-xs text-slate-500">{item.company}</div>
                                </TableCell>
                                <TableCell>
                                    <Badge variant="secondary" className="text-[10px] font-bold uppercase tracking-wider">
                                        {item.type}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-sm text-slate-500">{item.date}</TableCell>
                                <TableCell className="text-right">
                                    <div className="flex justify-end gap-2">
                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-primary">
                                            <Eye className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-blue-600">
                                            <Edit2 className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            onClick={() => handleAction(item.id, 'approve')}
                                            className="h-8 w-8 bg-green-500 hover:bg-green-600 text-white p-0"
                                        >
                                            <Check className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            onClick={() => handleAction(item.id, 'reject')}
                                            variant="destructive" className="h-8 w-8 p-0"
                                        >
                                            <X className="h-4 w-4" />
                                        </Button>
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

export default AdminModeration;