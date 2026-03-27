import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, UserPlus, Star, MessageSquare, Share2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProfessionalNetwork = () => {
    const [friends] = useState([
        { id: 1, name: "Тигран Аветисян", role: "Backend Developer", university: "RAU", interests: ["Golang", "Highload"], status: "Ищет стажировку" },
        { id: 2, name: "Мариам Погосян", role: "UI/UX Designer", university: "NUACA", interests: ["Figma", "Typography"], status: "Открыта к предложениям" },
        { id: 3, name: "Давид Саакян", role: "QA Engineer", university: "AUA", interests: ["Autotests", "Python"], status: "В поиске проектов" },
    ]);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-xl font-bold">Моя сеть</h3>
                    <p className="text-sm text-slate-500">Ваши коллеги и друзья по университету</p>
                </div>
                <div className="relative w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input placeholder="Найти коллегу..." className="pl-10 h-10 rounded-xl" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {friends.map((friend) => (
                    <Card key={friend.id} className="group hover:border-primary/50 transition-all duration-300 shadow-sm overflow-hidden">
                        <CardContent className="p-5">
                            <div className="flex items-start justify-between">
                                <div className="flex gap-4">
                                    <div className="h-12 w-12 rounded-xl bg-slate-100 flex items-center justify-center font-bold text-slate-400">
                                        {friend.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">{friend.name}</h4>
                                        <p className="text-xs text-primary font-medium">{friend.role} • {friend.university}</p>
                                    </div>
                                </div>
                                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-primary">
                                    <MessageSquare className="h-4 w-4" />
                                </Button>
                            </div>

                            <div className="mt-4 space-y-3">
                                <div className="flex flex-wrap gap-1.5">
                                    {friend.interests.map(interest => (
                                        <Badge key={interest} variant="secondary" className="text-[10px] px-2 py-0 border-none font-semibold">
                                            {interest}
                                        </Badge>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between pt-3 border-t border-slate-50">
                                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Интересы: {friend.status}</span>
                                    {/* ФУНКЦИОНАЛ РЕКОМЕНДАЦИЙ ПО ТЗ */}
                                    <Button size="sm" variant="outline" className="h-8 gap-2 text-xs border-primary/20 hover:bg-primary/5 text-primary">
                                        <Share2 className="h-3 w-3" /> Рекомендовать
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}

                <button className="border-2 border-dashed border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center gap-2 hover:bg-slate-50 transition-colors text-slate-400 hover:text-primary hover:border-primary/30">
                    <UserPlus className="h-6 w-6" />
                    <span className="text-sm font-semibold">Найти новых знакомых</span>
                </button>
            </div>
        </div>
    );
};

export default ProfessionalNetwork;