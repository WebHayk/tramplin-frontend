import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    Building2,
    MapPin,
    Briefcase,
    Clock,
    Globe,
    ChevronLeft,
    Send,
    Link as LinkIcon,
    CheckCircle2,
    Calendar,
    Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const OpportunityDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);

    // Моковые данные (в будущем потянем по id из API)
    const data = {
        title: "Middle React Developer",
        company: "КодИнсайт",
        type: "Вакансия",
        location: "Таллин / Remote",
        salary: "3 000 - 4 500 $",
        postedAt: "2 дня назад",
        tags: ["React", "TypeScript", "Node.js", "V8"],
        description: `
      ### О проекте
      Мы разрабатываем платформу для iGaming индустрии. Наша цель — создать самый быстрый и отзывчивый UI на рынке.
      
      ### Что мы ожидаем:
      - Опыт работы с React от 3-х лет.
      - Понимание работы V8 (hidden classes, inline caches).
      - Умение писать чистый, поддерживаемый код на TypeScript.
      
      ### Мы предлагаем:
      - Полностью удаленный формат работы.
      - Оплата в USDT/Crypto (по твоему запросу).
      - ДМС и курсы английского.
    `
    };

    const handleApply = (e) => {
        e.preventDefault();
        // Логика отправки отклика
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-[#f8fafc] pb-20">
            {/* Кнопка назад */}
            <div className="container mx-auto px-6 py-6">
                <Button
                    variant="ghost"
                    onClick={() => navigate(-1)}
                    className="gap-2 text-slate-500 hover:text-primary transition-colors"
                >
                    <ChevronLeft className="h-4 w-4" /> Назад к поиску
                </Button>
            </div>

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">

                {/* ЛЕВАЯ КОЛОНКА: Описание */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-sm">
                        <div className="flex flex-wrap gap-2 mb-6">
                            <Badge className="bg-primary/10 text-primary border-none">{data.type}</Badge>
                            <Badge variant="outline" className="text-slate-500">{data.location}</Badge>
                        </div>

                        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">{data.title}</h1>

                        <div className="flex flex-wrap items-center gap-6 text-slate-500 font-medium mb-8">
                            <div className="flex items-center gap-2">
                                <Building2 className="h-5 w-5 text-primary" />
                                <span className="text-slate-900">{data.company}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Zap className="h-5 w-5 text-amber-500" />
                                <span className="text-slate-900 font-bold">{data.salary}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="h-5 w-5" />
                                <span>Опубликовано {data.postedAt}</span>
                            </div>
                        </div>

                        <div className="prose prose-slate max-w-none border-t pt-8">
                            {/* Рендеринг текста (в реале тут будет ReactMarkdown) */}
                            <div className="whitespace-pre-line text-slate-700 leading-relaxed text-lg">
                                {data.description}
                            </div>
                        </div>

                        <div className="mt-10 pt-8 border-t">
                            <h4 className="font-bold text-slate-900 mb-4">Технологический стек:</h4>
                            <div className="flex flex-wrap gap-3">
                                {data.tags.map(tag => (
                                    <Badge key={tag} variant="secondary" className="px-4 py-1.5 rounded-full text-sm">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ПРАВАЯ КОЛОНКА: Форма отклика (Sticky) */}
                <aside className="lg:col-span-1">
                    <div className="sticky top-24 space-y-6">
                        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-primary/5">
                            {!submitted ? (
                                <form onSubmit={handleApply} className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Откликнуться</h3>
                                        <p className="text-sm text-slate-500">Работодатель увидит ваш профиль и это сообщение</p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="message">Сопроводительное письмо</Label>
                                            <Textarea
                                                id="message"
                                                placeholder="Расскажите, почему вы подходите..."
                                                className="min-h-[120px] rounded-xl focus:ring-primary"
                                                required
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="portfolio">Ссылка на портфолио/GitHub (опционально)</Label>
                                            <div className="relative">
                                                <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                                <Input id="portfolio" className="pl-10 rounded-xl" placeholder="https://github.com/..." />
                                            </div>
                                        </div>
                                    </div>

                                    <Button type="submit" className="w-full h-12 rounded-xl text-md font-bold gap-2">
                                        <Send className="h-4 w-4" /> Отправить отклик
                                    </Button>

                                    <p className="text-[10px] text-center text-slate-400 leading-tight">
                                        Нажимая кнопку, вы соглашаетесь на передачу ваших персональных данных работодателю.
                                    </p>
                                </form>
                            ) : (
                                <div className="py-10 text-center animate-in zoom-in-95 duration-300">
                                    <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-green-50/50 shadow-sm">
                                        <CheckCircle2 className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Успешно!</h3>
                                    <p className="text-sm text-slate-500 mb-6">Ваш отклик отправлен в {data.company}. Вы можете отслеживать статус в Личном Кабинете.</p>
                                    <Button variant="outline" onClick={() => navigate('/candidate')} className="w-full rounded-xl border-slate-200">
                                        В личный кабинет
                                    </Button>
                                </div>
                            )}
                        </div>

                        {/* Карточка компании (мини) */}
                        <div className="bg-slate-900 rounded-3xl p-6 text-white overflow-hidden relative">
                            <div className="relative z-10">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">О компании</p>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="h-10 w-10 bg-white/10 rounded-lg flex items-center justify-center">
                                        <Building2 className="h-6 w-6 text-white" />
                                    </div>
                                    <h4 className="font-bold">{data.company}</h4>
                                </div>
                                <Button variant="link" className="text-primary-foreground p-0 h-auto text-xs gap-1 hover:text-white transition-colors">
                                    <Globe className="h-3 w-3" /> Перейти на сайт компании
                                </Button>
                            </div>
                            {/* Декоративный элемент */}
                            <div className="absolute -right-4 -bottom-4 h-24 w-24 bg-primary/20 rounded-full blur-3xl"></div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default OpportunityDetailPage;